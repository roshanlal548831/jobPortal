import { Company } from "../model/companyModel.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const registeCompanyr = async(req,res) =>{
     try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required",
                success:false
            })
        }

        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"You can't register same company",
                success:false
            })
        };

      company = await Company.create({
            name:companyName,
            userId:req.id
        })
 
    return res.status(201).json({
        message:"Created register successfully",
        company,
        success:true
    })

     } catch (error) {
        console.log(error)
     }
};

export const getCompany = async(req,res)=>{
    try {
        const userId = await req.id;
        const companies = await Company.find({userId:userId}); // logged in user id

        if(!companies){
            return res.status(404).json({
                message:"Companys not found.",
                success:false
            });
        };
       
    return res.status(200).json({
        companies,
        success:true
    })

    } catch (error) {
        console.log(error)
    }
}

//get company get by id 

export const getCompanyById  = async(req,res)=>{
    try {
        const companyById = req.params.id;
        const company = await Company.findById({_id:companyById});
        if(!company){
            return res.status(404).json({
                message:"Company not found.",
                success:false
            });

        };

        return res.status(200).json({
            company,
            success:true
        })

    } catch (error) {
        console.log("this i serror dayat =. ",error)
        
    }
}

export const updateCompany = async(req,res)=>{
    try {
        const {name,description,website,location} = req.body;
        const file = req?.file;
        const companyId = req.params?.id;

        //here will come clouddinary
        let cloudResponse;
        if(file){
            const fileUri = getDataUri(file);
             cloudResponse = await cloudinary.uploader.upload(fileUri?.content);
        };
  
        const updateData = {name,description,website,location,logo:cloudResponse?.secure_url};


        const company = await Company.findByIdAndUpdate(companyId,updateData,{ new: true, runValidators: true });
        if(!company){
            return res.status(400).json({
                message:"Company not found.",
                success:false
            })
        };

        

        return res.status(200).json({
            message:"Company information updated." ,
            success:true
    })



     } catch (error) {
        console.log("this is erorr data ",error)
        
    }
}