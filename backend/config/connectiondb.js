import mongoose from "mongoose";
const connectdb= async (DATABASE_URL)=>{
    try {
        const options_db={
            dbName:"SwagKicks"
        }
        await mongoose.connect(DATABASE_URL,options_db)
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}
export {connectdb}