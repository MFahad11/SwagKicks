import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"USER",
    },
    orderItems: [{
        name:{
            type: String,
            required: true,
        },
        size:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        image: {
            type: String,
            required: true,
        },
        price: { type: Number,required:true },
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"PRODUCT"
        }
}],
shippingAddress:{
    address:{
        type:"string",
        required:true
    },
    city:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    postalCode:{
        type:Number,
        required:true
    }
},
totalPrice:{
    type:Number,
    required:true,
    default:0
},
status:{
    type:"String",
    required:true,
    default:"Pending"
}
},
{ timestamps: true })
// MODEL
const orderModel=mongoose.model("ORDER",orderSchema)
export default orderModel