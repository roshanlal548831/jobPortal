import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Navbar from '../shard/Navbar';
import UseGetSingleJobs from '@/hooks/UseGetSingleJob';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { setSearchQuiry, setSingleJob } from '@/redux/job/jobSlice';

const JobDescription = () => {
  const {singleJob} = useSelector(store => store.job);
  const dispatch = useDispatch()

  const {user} = useSelector(store => store.auth);
  const params = useParams()
  const jobId = params.id

  console.log(user?.userData?.profile)
  
  const userid = user?.userData?._id;
  const isIntiallyApplied = singleJob?.application?.some(application => application?.applicant === userid)|| false
  
  const [isApplied,setIsapplied] = useState(isIntiallyApplied);
  
  

  const jobApply = async() => {
    try {
       if(!user.userData.profile.resume || !user.userData.profile.skills.length === 0 ){
         toast.error("Update your Profile")
       }else{
        const res = await axios.get(`/api/v1/applicatios/apply/${jobId}`);
        setIsapplied(true) //UpDate the local state
        const updateSingleJob = {...singleJob,application:[...singleJob?.application,{applicant:user?.userData?._id}]};
        dispatch(setSingleJob(updateSingleJob))
        toast.success(res.data.message)
       }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  UseGetSingleJobs(jobId,setIsapplied);

  
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex justify-between items-center'>
      <div>
      <h1 className='font-bold text-xl '>{singleJob?.title}</h1>
          <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">{singleJob?.position} position</Badge>
                <Badge className={"text-[#F83002] font-bold"} variant="ghost">{singleJob?.jobType}</Badge>
                <Badge className={"text-[#720B97] font-bold"} variant="ghost">{singleJob?.salary} LPA</Badge>
            </div>
      </div>
     
      <Button disabled={isIntiallyApplied} onClick={isIntiallyApplied ? null : ()=> jobApply()} className={`${isIntiallyApplied? "bg-gray-800 text-white hover:bg-gray-500 cursor-not-allowed": "bg-[#911a8d] text-white hover:bg-[#ce62ca]"}`}> {
        isIntiallyApplied ? 'Allready Apply' : "Apply Now"
      }
      </Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>{singleJob?.description}</h1>
      <div className='my-4'>
         <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
         <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
         <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
         <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel} yrs</span></h1>
         <h1 className='font-bold my-1'>Salray: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}Lpa</span></h1>
         <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.application?.length}</span></h1>
         <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
    </>
  )
}

export default JobDescription
