import dotenv from "dotenv"
import express from "express"
import userroutes from "./routes/userroutes.js"
import productroutes from './routes/productroutes.js'
import orderroutes from './routes/orderroutes.js'
import { connectdb } from "./config/connectiondb.js"
import cors from "cors"
dotenv.config()
const app=express()
const port=process.env.PORT
const DATABASE_URL= process.env.DATABASE_URL
app.use(cors())
app.use(express.json()) //for api returning JSON
app.use("/api",userroutes) // TO load Routes
app.use("/api",productroutes)
app.use("/api",orderroutes)
connectdb(DATABASE_URL)
app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})