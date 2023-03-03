import dotenv from "dotenv"
import express from "express"
import { connectdb } from "./config/connectiondb.js"
import cors from "cors"
dotenv.config()
const app=express()
const port=process.env.PORT
const DATABASE_URL= process.env.DATABASE_URL
app.use(cors())
app.use(express.json()) //for api returning JSON
connectdb(DATABASE_URL)
app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})