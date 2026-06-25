//import { Suspense } from "react";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


//----------------------------sigup user-----------------------
export const registerUser = async(req, res)=>{
    try{
        const{name,email,password} = req.body;

        const hashedPassword= await bcrypt.hash(password,10)

        //-----------------------------------------------------------------
        //check all fiels

        if(!name|| !email || !password){
            return res.status(400).json({
                success:false,
                message:"All filed are required",
            })
        
        }
        //-----------------------------------------------------------------
        //Check existing user 

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                success:false,
                message:"User ALready Exist"
            })
        }
        //-----------------------------------------------------------------
        //Create User

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        console.log(user)
        res.status(200).json({
            success:true,
            message:"User Register Successful"
        })

    }

    //-----------------------------------------------------------------
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}

//-------------------------------------------------login user -----------------------------


