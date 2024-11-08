import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'
import UseGetAllJobs from '@/hooks/UseGetAllJobs'
import { useDispatch } from 'react-redux'
import { setSearchQuiry } from '@/redux/job/jobSlice'

const Job = ({job}) => {
  UseGetAllJobs()
  
  const daysAgoFunctio = (mongdbTime) => {
     const createdAt = new Date(mongdbTime);
     const currentTime = new Date();
     const timeDifference = currentTime - createdAt;
     return Math.floor(timeDifference/(1000*24*60*60));

  }
  

  const navigate = useNavigate()
  

  return (
    <div onClick={() => navigate(`/description/${job?._id}`)}  className='p-5 rounded-md cursor-pointer shadow-xl bg-white border-gray-300'>
        <div className='flex items-center justify-center'>

        </div>
       <p className='text-sm text-gray-500'>{daysAgoFunctio(job?.createdAt) === 0 ? "Today" : `${daysAgoFunctio(job?.createdAt)}`} days ago</p>
       <Button  className="rounded-full border" size="icone"><Bookmark/></Button>
       <div className='flex items-center gap-2 my-2'>
         <Button>
           <Avatar>
            <AvatarImage src={job?.company?.logo} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
           </Avatar>
         </Button>
         <div>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>{job?.location}</p>
         </div>
       </div>
       <div> 
             <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
             <p className='text-sm text-gray-600'>{job?.description}</p>
       </div>
       <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={"text-[#F83002] font-bold"} variant="ghost">{job?.jobType}</Badge>
                <Badge className={"text-[#720B97] font-bold"} variant="ghost">{job?.salary} LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
            <Button onClick={() => navigate(`/description/${job?._id}`)}>Details</Button>
            <Button className="bg-[#720B97] text-white rounded-md">Save For Latter</Button>
            </div>
    </div>
  )
}

export default Job
