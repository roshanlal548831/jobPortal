import { Job } from "../model/jobModel.js";
// admin will post a job
export const postJob = async(req,res)=>{
    try {
        const {title,description,requirements,salary,location,jobType,experience,position,companyId} = req.body;
        const userId = req.id;
        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        };

        const job = Job.create({
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experienceLevel:experience,
            position,
            company: companyId,
            created_by:userId,

        });

        return res.status(201).json({
            message:"new job created successfully",
            success:true,
            job
        })

    } catch (error) {
        console.log(error)
        
    }
};

// for student

export const getAllJob = async(req,res) => {
    try {
        const keyword = req.query.keyword || ""
        const query = {
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]
        }
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt : -1})
       
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }

        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
        
    }
};

// for student

export const getJobById = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            }); 
        }

        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
};

// how many job created by admin just now

export const getAdminJobs = async(req,res)=>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            }); 
        };
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
