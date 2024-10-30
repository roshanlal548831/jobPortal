import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {
  const navigate = useNavigate()
  const {allAdminJobs,searchJobBytext} = useSelector(store => store.adminJobs);

  const[filterJobs,setFilterJobs] = useState(allAdminJobs);

  useEffect(()=>{
   const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job)=> {

    if(!searchJobBytext){
      return true
    };
    return job?.title?.toLowerCase().includes(searchJobBytext.toLowerCase()) || job?.company?.name?.toLowerCase().includes(searchJobBytext.toLowerCase()) ;
   });
   setFilterJobs(filteredJobs)
  },[allAdminJobs,searchJobBytext])

  return (
    <div>
      <Table>
         <TableCaption> A List of your recent registerd jobs</TableCaption>
         <TableHeader>
              <TableRow>
                <TableHead>Company Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
         </TableHeader>
         <TableBody>
          {
            filterJobs.length < 0 ? <span>You haven't registred any company yet</span> :
            filterJobs?.map((job,i)=>(
               <tr key={i}>
               {/* {
                  console.log("this is hobs",job)

               } */}
                <>
             <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
             <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
             <TableCell className="text-right cursor-pointer">
                 <Popover>
                   <PopoverTrigger><MoreHorizontal/> </PopoverTrigger>
                      <PopoverContent className="w-32">
                           <div onClick={()=> navigate(`/admin/companies/${job?._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                <Edit2 className='w-4'/>
                                <span>Edit</span>
                           </div>
                       </PopoverContent>
                 </Popover>
             </TableCell>
           </>
               </tr>
            )
               
            )
         
          }
             
         </TableBody>
      </Table>
    </div>
  )
}

export default AdminJobsTable




