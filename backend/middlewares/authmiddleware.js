import Jwt  from "jsonwebtoken";
import userModel from "../models/user.js";
var checkauth=async(req,res,next)=>{
    let token
    const{authorization}=req.headers //from client
    if(authorization && authorization.startsWith('Bearer')){ // contains value or have bearer key word in start
        try{
            token=authorization.split(' ')[1]
            // verify token
            const {userID}=Jwt.verify(token,process.env.JWT_secret_key)
            // console.log(userID);
            //Get user from Token
            req.user = await userModel.findById(userID).select("-password")
            next()
        }catch{
            res.status(401).send({"status":"failed","Message":"Failed Authewntication"})
        }
    }
    else{
        res.status(401).send({"status":"failed","Message":"Failed Authentication"})
    }
}
export default checkauth