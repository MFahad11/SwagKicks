import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mainImage: {
        type: String,
        required: true,
    },
    gridImage:{
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    color:{type:String,required:true},
    stock:{type:Number,required:true},
    size:{type:Array,required:false},
    price: { type: Number,required:true },
},
{ timestamps: true })
// MODEL
const productModel=mongoose.model("PRODUCT",productSchema)
export default productModel