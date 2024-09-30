import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const  register = async(req,res) =>{
    try {
        const {fullname,email,phoneNumber,password,role} = req.body
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        };

        const user = await User.findOne({email});

       if(user){
        return res.status(400).json({
            message:"User alredy exist with this email",
            success:false
        })
       }

     const hashPassword = await bcrypt.hash(password,10); // password hashing

     await User.create({
        fullname,
        email,
        phoneNumber,
        password:hashPassword,
        role
     })

      return res.status(201).json({
        message:"Account created successfully",
        success:true
      })

    } catch (error) {
        console.log(error)
    }
}


export const login = async(req,res) =>{
    try {
        const {email,password,role} = req.body;
        console.log(email,password,role)

        if( !email ||  !password ||!role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        };

   const user = await User.findOne({email});

   if(!user){
    return res.status(400).json({
        message:"Incorrect email or password.",
        success:false
    })
   }
        

   const isPasswordMatch = await bcrypt.compare(password,user.password)
   if(!isPasswordMatch){
    return res.status(400).json({
        message:"Incorrect email or password",
        success:false
    })
   };

   if(role !==  user.role){
    return res.status(400).json({
        message:"Account dosen't exist with role.",
        success:false
    })
   }

   const tokenData = {
    userId:user._id
   }

   const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"1d"})

   const  userData = {
    _id :user._id,
    fullname:user.fullname,
    email:user.email,
    phoneNumber:user.phoneNumber,
    role:user.role,
    profile:user.profile
   }

   return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:"strict"}).json({
      message:`Welcome back ${user.fullname}`,
      userData,
      success:true
   })


    } catch (error) {
        console.log(error)
    }
};

export const logout = async (req,res) =>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logout successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
        
    }
}


export const updateProfile = async(req,res) =>{
    try {
        const {fullname,email,phoneNumber,bio,skills} = req.body
        const file = req.file;
       
        // here will come cloudrynarry

        const skillsArray = skills.split(",");
        const userId = await req.id; // middleware authtication
        let user = await User.findById({_id:userId});
        if(!user){
            return res.status(400).json({
              message:"user not found",
              success: false
            });
        };

        // updating data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio)   user.profile.bio = bio;
        if(skillsArray)  user.profile.skills = skillsArray;
       
       
       
      
      
       // resume comes later here

        await  user.save()

        user = {
            _id :user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
           }
        
           return res.status(201).json({
            message : "Profile updated successfully",
            success:true,
            user
           })

    } catch (error) {
        console.log(error)
    }
}