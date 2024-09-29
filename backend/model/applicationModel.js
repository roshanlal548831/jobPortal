import mongoose, { Schema } from "mongoose";

const applocationSchema = new mongoose.Schema({
      job:{
        type:Schema.Types.ObjectId,ref:"Job",
        required:true
      },
      applicant:{
        type:Schema.Types.ObjectId,ref:"User",
        required:true
      },
      status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending",
        required:true
      },
      
     
},{timestamps:true})

export const Application = mongoose.model("Application",applocationSchema)