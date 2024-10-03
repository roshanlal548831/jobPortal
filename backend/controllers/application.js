import { Application } from "../model/applicationModel.js";
import { Job } from "../model/jobModel.js";

// user will appliy

export const applyjob = async (req,res) => {
     try {
        const userId = req.id;
        const jobId = req.params.id;
        console.log(jobId)
        if(!jobId){
            return res.status(400).json({
                message:"Job id is required.",
                success:false
            })
        };
        // check if the user has alredy applied for job
        const existingApplication = await Application.findOne({job:jobId,applicant:userId});
        if(existingApplication){
            return res.status(400).json({
                message:"You have already  allied for job",
                success:false
            });
        };

        // chect if the jobs exist
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            }); 
        };

        // created a new application

        const newappication = await Application.create({
            job:jobId,
            applicant:userId,
        });
 
        job.application.push(newappication._id);
        await job.save();
       
        return res.status(201).json({
            message:"Job applied successfully",
            success:true
        })

     } catch (error) {
        console.log(error)
     }
};

// user will check that he has applied how many job

export const getAppiedJobs = async(req,res)=> {
    try {
        const userId = req.id
        const appliedJob = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"company",
                options:{sort:{createdAt:-1}},
            }
        })
        if(!appliedJob){
            return res.status(404).json({
                message:"No appication",
                success:false
            })
        }

        return res.status(200).json({
           appliedJob,
           success:true
        })
    } catch (error) {
        console.log(error)
    }
};
//admin will look that  how many user have applied for job

export const getAppicats = async(req,res)=>{
    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId).populate({
            path:"application",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"applicant",
                options:{sort:{createdAt:-1}},
            }
        });


        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }

    return res.status(200).json({
        job,
        success:true
    })

    } catch (error) {
        console.log(error)   
    }
};

export const updatedStatus = async(req,res) => {
    try {
        const {status} = req.body;

        if(!status){
            return res.status(404).json({
                message:"Status is required",
                success:false
            });
        };

        const appicationId = req.params.id


        // find the application by application id

        const application = await Application.findOne({_id:appicationId});


        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false
            });
        };

         // update status


        application.status = status.toLowerCase();
        await application.save()
        return res.status(200).json({
            message:"Status Updated successfully.",
            success:true
        })

    } catch (error) {
        console.log(error)        
    }
}
