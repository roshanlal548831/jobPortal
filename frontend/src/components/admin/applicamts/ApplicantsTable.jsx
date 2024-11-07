import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow, 
} from '@/components/ui/table';
import axios from 'axios';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const shortlistingStatus = ["accepted","rejected"]


const ApplicantsTable = () => {

 const {allApplicants} = useSelector(store => store.applicant);
 const navigate = useNavigate();

 const statusHandler = async (status,userId) => {
  console.log(status)
     try {
      const res = await axios.post(`/api/v1/applicatios/status/${userId}/update`,{status});
      if(res.data.success){
        navigate("/admin/jobs")
        toast.success(res.data.message)
      }
         console.log("this is datat",res)
     } catch (error) {
       toast.error(error.response.data.message)
      
     }
 }

  return (
    <div>
        <Table>
  <TableCaption>A list of your recent applied user.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead >FullName</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Contact</TableHead>
      <TableHead >Resume</TableHead>
      <TableHead >date</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      allApplicants && allApplicants?.application.map((item,i)=>(
        <tr>
        <TableCell >{item?.applicant?.fullname}</TableCell>
        <TableCell>{item?.applicant?.email}</TableCell>
        <TableCell>{item?.applicant?.phoneNumber}</TableCell>
        <TableCell > <a target='blank'  href={item?.applicant?.profile?.resume} className='text-blue-500 w-full hover:underline'>{item?.applicant.profile.resumeOriginalName ? item?.applicant.profile.resumeOriginalName : "No resume"}</a></TableCell>
        <TableCell >{item?.applicant?.createdAt.split("T")[0]}</TableCell>
        <TableCell className="text-right">
          <Popover>
               <PopoverTrigger>
                    <MoreHorizontal/>
                    <PopoverContent className="w-32">
                    {
                         shortlistingStatus.map((status,i)=>{
                             return(
                                 <div onClick={()=>statusHandler(status,item?._id)} key={i} className='gap-5 m-4 cursor-pointer'>
                                     <span>{status}</span>
                                 </div>
                             )
                         })
                       }
                    </PopoverContent>
               </PopoverTrigger>
          </Popover>
        
        </TableCell>
      </tr>
      ))
    }
    
  </TableBody>
</Table>
    </div>
  )
}

export default ApplicantsTable
