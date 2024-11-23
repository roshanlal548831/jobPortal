import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const  register = async(req,res) =>{
    try {
        const {fullname,email,phoneNumber,password,role} = req.body;
        const file = req.file;
       
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        };

        if(!file){
            return res.status(400).json({
                message:"Profile photo is missing",
                success:false
            })
        }

        let cloudResponse;
        if(file){
            const fileUri = getDataUri(file);
             cloudResponse = await cloudinary.uploader.upload(fileUri.content,{
                resource_type: 'raw',
             });
        }
        
      

        const user = await User.findOne({email});

       if(user){
        return res.status(400).json({
            message:"User alredy exist with this email",
            success:false
        })
       }

     const hashPassword = await bcrypt.hash(password,10); // password hashing

   const userdata  = await User.create({
        fullname,
        email,
        phoneNumber,
        password:hashPassword,
        role,
        profile:{
            profilePhoto:cloudResponse?.secure_url
        }
     })

     const tokenData = {
        userId:userdata._id
       }
    
    


      const token = await jwt.sign(tokenData,process.env.SECRET_KEY)

      const  userData =  {
        _id :userdata._id,
        fullname:userdata.fullname,
        email:userdata.email,
        phoneNumber:userdata.phoneNumber,
        role:userdata.role,
        profile:userdata?.profile
       }
    
      
      return res.status(201).cookie("token",token,{httpOnly:true,sameSite:"strict"}).json({
        message:"Account created successfully",
        userData,
        success:true
      })

    } catch (error) {
        return res.status(400).json({
            message:"Register failed.",
            success:false
        })
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

   const token = await jwt.sign(tokenData,process.env.SECRET_KEY)

   const  userData = {
    _id :user._id,
    fullname:user.fullname,
    email:user.email,
    phoneNumber:user.phoneNumber,
    role:user.role,
    profile:user.profile
   }

   return res.status(200).cookie("token",token,{httpOnly:true}).json({
      message:`Welcome back ${user.fullname}`,
      userData,
      success:true
   })


    } catch (error) {
        return res.status(500).json({
            message:"Login failed.",
            success:false
        })
    }
};

export const logout = async (req,res) =>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logout successfully",
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            message:"logout failed.",
            success:false
        })
        
    }
}


export const updateProfile = async(req,res) =>{
    try {
        const {fullname,email,phoneNumber,bio,skills} = req.body
        const file = req.file
        // here will come cloudrynarry
        let cloudResponse;
        if(file){
            const fileUri = getDataUri(file);
             cloudResponse = await cloudinary.uploader.upload(fileUri?.content);
        }
       
        // const str = skills.join()
        const skillsArray = skills.split(',');
        

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
        if(skills)  user.profile.skills = skillsArray;
        if(cloudResponse){
            user.profile.resume = cloudResponse.secure_url, // save the cloudinary
            user.profile.resumeOriginalName = file.originalname // Save the original name
        } 
       
       
       
      
      
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
        console.log("this is update userData",user)
           return res.status(201).json({
            message : "Profile updated successfully",
            success:true,
            userData:user
           })

    } catch (error) {
        console.log(error)
    }
}