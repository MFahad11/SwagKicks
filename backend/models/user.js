import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
    password:{type:String,required:true,trim:true},
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
    contactNumber: { type: String },
    pofilePicture: { type: String },
},
{ timestamps: true })
// MODEL
const userModel=mongoose.model("USER",userSchema)
export default userModel