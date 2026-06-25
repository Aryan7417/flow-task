import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.JWT_SECRET)
        console.log("server is connecterd😉😉😊")

    } catch (error) {
        console.log("mongoDB failed!!!!XX");
        console.log(error.message)

    }
}

export default connectDB;