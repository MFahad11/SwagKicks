import mongoose from "mongoose"
// import routes from "./routes/userroutes.js"
import productModel from "./models/product.js"
import orderModel from "./models/order.js"
import userModel from "./models/user.js"
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const productData = require('./data.json');
import dotenv from "dotenv";
import { connectdb } from "./config/connectiondb.js";
dotenv.config();
connectdb(process.env.DATABASE_URL)
const importData=async()=>{
    try{
        await orderModel.deleteMany()
        await productModel.deleteMany()
        // const user=await userModel.findOne({role:"admin"})    
        const data=productData.sneakers.map((product)=>{
            const {name,brand_name:brand,color,original_picture_url:mainImage,grid_picture_url:gridImage,retail_price_cents:price,size_range:size}=product
            // console.log(product.retail_price_cents,price)
            return{name,brand,color,mainImage,gridImage,price,size,stock:40}
        })
        await productModel.insertMany(data)
        console.log("data inserted")
        process.exit()
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}
const destroy=async()=>{
    await orderModel.deleteMany()
    await productModel.deleteMany()
    console.log("error")
    process.exit()
}
if(process.argv[2]==="-d"){
    destroy()   
}
else{
    importData()
}