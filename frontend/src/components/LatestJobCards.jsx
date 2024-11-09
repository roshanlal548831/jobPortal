import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LatestJobCards = ({job}) => {
  const navigate = useNavigate()
  return (
    <motion.div 
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:-100}}
    transition={{duration: 0.3}}
    onClick={() => navigate(`/description/${job?._id}`)}>
      <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 '>
        <div>
         <h1 className='font-medium text-lg '>{job?.company?.name}</h1>
           <p className='text-sm text-gray-500'>{job?.location}</p>
        </div>
         <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={"text-[#F83002] font-bold"} variant="ghost">{job?.jobType}</Badge>
                <Badge className={"text-[#720B97] font-bold"} variant="ghost">{job?.salary} LPA</Badge>
            </div>

            <Button className="mt-2" onClick={() => navigate(`/description/${job?._id}`)}>Details</Button>
         </div>
      </div>
    </motion.div>
  )
}

export default LatestJobCards
