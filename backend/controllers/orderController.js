import orderModel from "../models/order.js"
import userModel from '../models/user.js'
class orderController{
    static addOrderItem= async(req,res)=>{
        const {orderItems,shippingAddress,totalPrice}=req.body
        if(orderItems && orderItems.length===0){
            res.send({"error":"No order found"})
            return
        }else{
            const order =new orderModel({
                orderItems,
                user:req.user._id,
                shippingAddress,
                totalPrice,
            })
            const createOrder=await order.save()
            res.send({"result":createOrder})
        }
        // console.log(data)
    }
    static getMyOrders=async(req,res)=>{
        const orders=await orderModel.find({user:req.user._id})
        res.send(orders)
    }
    static getAllPendingOrders=async(req,res)=>{
        try {
            const orders=[]
            const response=await orderModel.find({})
            console.log
            response.map((item)=>{
                if(item.status!=="Deleted" && item.status!=="Delivered"){
                orders.push({ orderId:item._id,
                Products:item.orderItems.length,
                totalPrice:item.totalPrice,
                city:item.shippingAddress.city,
                createdAt:item.createdAt,
                status:item.status

            })}
            })
            res.send(orders)
        } catch (error) {
            res.send(error)
        }
    }
    static getAllOrders=async(req,res)=>{
        try{
            const orders=[]
        const response=await orderModel.find({})
        response.map((item)=>{
            orders.push({ orderId:item._id,
            Products:item.orderItems.length,
            totalPrice:item.totalPrice,
            city:item.shippingAddress.city,
            createdAt:item.createdAt,
            status:item.status

        })
        })
        res.send(orders)
    } catch (error) {
            res.send(error)
        }
    }
    static getOrderDetails=async(req,res)=>{
        try {
            
            const order=await orderModel.findById(req.params.id)
            const user=await userModel.findById(order.user)
            res.send({order,user})
        } catch (error) {
            
        }
    }
    // static product= async(req,res)=>{
    //     const product=await productModel.findById(req.params.id)
    //     res.send(product)
    // }
    static markOrderDeliver=async(req,res)=>{
        
        const id=req.body.orderid
        try {
            const order=await orderModel.findOne({_id:id})
            order.status="Delivered"
            await order.save()
            res.send("Done!!")
        } catch (error) {
            
        }
    }
    static markOrderDelete=async(req,res)=>{
        
        const id=req.body.orderid
        try {
            const order=await orderModel.findOne({_id:id})
            order.status="Deleted"
            await order.save()
            res.send("Done!!")
        } catch (error) {
            
        }
    }
}
export default orderController