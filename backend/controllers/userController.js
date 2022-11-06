import userModel from "../models/user.js";
import orderModel from '../models/order.js'
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";
// import { json } from "express";
// import data from "../data.json" assert { type: "json" };
// import data from '../data.json'
import transporter from "../config/emailConfig.js";
import { createRequire } from 'module';
import { response } from "express";
const require = createRequire(import.meta.url);
const data = require('../data.json');
class userController{
    static register= async(req,res)=>{
        const{firstName,lastName,email,password}=req.body
        const user=await userModel.findOne({email:email})
        if(user){
            res.send({"status":"failed","message":"Email already exist"})
        }
        else{
            if(firstName && lastName && email && password){
                    try {
                        const salt=await bcrypt.genSalt(10)
                        const hashed_pass=await bcrypt.hash(password,salt)
                        const doc=new userModel({
                            firstName:firstName,
                            lastName:lastName,
                            email:email,
                            password:hashed_pass
                        })
                        await doc.save()
                        const saved_user=await userModel.findOne({email:email})
                        //Generate JWT token
                        // const token=Jwt.sign({userID:saved_user._id},process.env.JWT_secret_key)
                        // res.cookie("JWT_token",token,{expires:new Date(Date.now()+7200),httpOnly:true})
                        const token=Jwt.sign({userID:saved_user._id},process.env.JWT_secret_key,{expiresIn:"180m"})
                        res.status(201).send({"status":"success","message":"Completed","token":token,"data":saved_user})
                    } catch (error) {console.log(error);}
            }
            else{
                res.send({"status":"failed","message":"All fields are required"})
            }
        }
    }
    static login=async(req,res)=>{
        try {
            const{email,password}=req.body
            if(email && password){
                const user=await userModel.findOne({email:email})
                if(user!=null){
                    const match= await bcrypt.compare(password,user.password)
                    if((user.email===email) && match){
                        const token=Jwt.sign({userID:user._id},process.env.JWT_secret_key,({expiresIn:"180m"}))
                        res.send({"status":"success","message":"Login Success","token":token,"data":user})
                    }
                    else{
                        res.send({"status":"failed","message":"Email or Password dosenot match"})
                    }
                }
                else{
                    res.send({"status":"failed","message":"You are not a registered user"})
                }
            }
            else{
                res.send({"status":"failed","message":"Fields must be filled"})
            }
        } catch (error) {
            res.send({"status":"failed","message":"Unable to login"})
        }
    }
    // static changepass=async(req,res)=>{
    //     const {password,password_confirm}=req.body
    //     if((password && password_confirm) && (password===password_confirm)){
    //         const salt=await bcrypt.genSalt(10)
    //         const newhashed_pass=await bcrypt.hash(password,salt)
    //         await userModel.findByIdAndUpdate(req.user._id,{$set:{password:newhashed_pass}})
    //         res.send({"status":"Pass","message":"Changed"})
    //     }else{
    //         res.send({"status":"failed","message":"All fields are required OR New Password and Confirm New Password doesnot match"})
    //     }
    // }
    static getAllUsers= async(req,res)=>{
        const data=[]
        const query={role:"user"}
        const users=await userModel.find(query)
        // const{_id,firstName,lastName,email}=users
        const orders=await orderModel.find()
        users.map((user)=>{
            const{_id,firstName,lastName,email,role}=user
            // console.log("user",_id)
            let totalOrders=0
            let activeOrders=0
            let city="-";let number="-";let total=0;
            orders.map((order)=>{
                // console.log(order.user)
                if(order.user.equals(_id))
                {
                    
                    totalOrders+=1
                    if(order.status==="Pending"){
                        activeOrders+=1;
                        city=order.shippingAddress.city;
                        number=order.shippingAddress.number;
                        total+=order.totalPrice
                        
                    }
                }
                else{
                    
                }
            })
            data.push(new Object({
                _id,
                firstName,
                lastName,
                email,
                totalOrders,
                activeOrders,
                city,
                number,
                total,
                role

            }))
        })
        
        // let query;
        // for await(const item of user){
        //     query={user:item._id}
        //     console.log(query)
        //     const {data}=await orderModel.find(query)
        //     console.log(data)
        // }
        // user.map(async(item)=>{
        //     query={user:item._id}
        //     console.log(orderModel.find(query))
        //     data.push(new Object({
        //         _id:item._id,
        //         email:item.email,
        //         firstName:item.firstName,
        //         lastNAme:item.lastName,

        //     }))
        //     // console.log(item)
        // })
        // const{_id,firstName,lastName,email}=user
        // const query={user:_id}
        // const data=await orderModel.find(query)
        // const totalOrders=data.length;
        // let activeOrders=0
        // let city="-";let number="-";let total=0;
        // // console.log(data.length)
        // data.map((item)=>{
        //     if(item.status==="Pending"){
        //         activeOrders+=1
        //         city=item.shippingAddress.city
        //         number=item.shippingAddress.number
        //         total=item.shippingAddress.totalPrice
        //     }
        //     else{

        //     }
        // })

        // res.send({_id,firstName,lastName,email,totalOrders,activeOrders,city,number,total})
        // res.send(data)
        res.send(data)
    }
    static deleteUsers= async(req,res)=>{
        const id=req.body.id
        try{
            await userModel.findOneAndDelete({_id:id})
            res.send("Done!!")
        }
        catch{
            res.send(error)
        }
    }
    static userData=async(req,res)=>{
        const {shippingAddress}= await orderModel.findOne({user:req.user._id})
        const {address,number,city}=shippingAddress
        const {firstName,lastName,email}=req.user
        // console.log(await orderModel.findOne({user:req.user._id}))
        res.send({"FirstName":firstName,"LastName":lastName,"Email":email,"Address":address,"Number":number,"City":city})
    }
    static sendemail=async(req,res)=>{
        const {email}=req.body
        if(email){
            const check_email=await userModel.findOne({email:email})
            if(check_email){
                const secret=check_email._id + process.env.JWT_secret_key
                const token=Jwt.sign({userID:check_email._id},secret,{expiresIn:'10m'})
                const link=`http://127.0.0.1:3000/api/user/reset/${check_email._id}/${token}` //this link redirect user to a frontend so we use port 3000
                
                //send email
                let info=await transporter.sendMail({
                    from:process.env.EMAIL_FROM,
                    to:check_email.email,
                    subject:"Password Reset",
                    html:`<a href=${link}> Reset Password </a>`
                })
                res.send({"status":"sended",info:"info"})
            }else{
                res.send({"status":"failed","message":"Email dosenot exist"})
            }
        }else{
            res.send({"status":"failed","message":"Email is required"})
        }
    }
    static passwordreset=async(req,res)=>{
        const {password}=req.body // from form
        const {id,token}=req.params //from url
        const findlostuser=await userModel.findById(id)
        const newSecret=findlostuser._id + process.env.JWT_secret_key
        try {
            Jwt.verify(token,newSecret)
            if(password){
                    const salt=await bcrypt.genSalt(10)
                    const newhashed_pass=await bcrypt.hash(password,salt)
                    await userModel.findByIdAndUpdate(findlostuser._id,{$set:{password:newhashed_pass}})
                    res.send({"status":"Success"})
            }else{
            res.send({"status":"Allfields required"})
            }
        } catch (error) {
            res.send({"status":"INVALID"})
        }
    }
}
export default userController