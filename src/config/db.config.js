import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/flowtask");
        console.log("server is connecterd😉😉😊")
        
    } catch (error) {
        console.log("mongoDB failed!!!!XX");
        console.log(error.message)
        
    }
}

export default connectDB;