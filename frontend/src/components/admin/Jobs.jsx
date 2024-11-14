import React, { useEffect, useState } from 'react'
import Navbar from '../shard/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import UseGetAlladminJobs from '@/hooks/UseGetAllAdminJobs'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import { setSearchJobBytext } from '@/redux/adminJobs/adminJobsSlice'

const Jobs = () => {

  UseGetAlladminJobs()

  const dispatch = useDispatch()
  const[input,setInput] = useState("");

  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(setSearchJobBytext(input));
  },[input]);

  return (
    <div className='sm:px-2 md:px-0'>
       <Navbar/>
       <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input type="text" 
                   placeholder="Find by name"
                   className="rounded-xl w-9 border border-gray-300 placeholder-gray-400 font-medium"
                   onChange={(e)=> setInput(e.target.value)}
                   />
                 <Button onClick={()=> navigate("/admin/job/create")} className="my-2 border hover:bg-[#ebe6e6]">New Job</Button>  
           </div>
           <AdminJobsTable/>
       </div>
    </div>
  )
}

export default Jobs
