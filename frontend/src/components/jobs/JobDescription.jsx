import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Navbar from '../shard/Navbar';
import UseGetSingleJobs from '@/hooks/UseGetSingleJob';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JobDescription = () => {
  const {singleJob} = useSelector(store => store.job);
  console.log("this si singl job",singleJob)
  const params = useParams()
  const jobId = params.id

  UseGetSingleJobs(jobId)

  const isAppied = true;

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex justify-between items-center'>
      <div>
      <h1 className='font-bold text-xl '>Title</h1>
          <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Positions</Badge>
                <Badge className={"text-[#F83002] font-bold"} variant="ghost">12 part Time</Badge>
                <Badge className={"text-[#720B97] font-bold"} variant="ghost">24 LPA</Badge>
            </div>
      </div>
     
      <Button disabled={isAppied} className={`${isAppied? "bg-gray-800 text-white hover:bg-gray-500 cursor-not-allowed": "bg-[#911a8d] text-white hover:bg-[#ce62ca]"}`}> {
        isAppied ? 'Allready Apply' : "Apply Now"
      }
      </Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
         <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend developer</span></h1>
         <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Raipur{"(C.G)"}</span></h1>
         <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi perferendis iure expedita ab fugit?</span></h1>
         <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
         <h1 className='font-bold my-1'>Salray: <span className='pl-4 font-normal text-gray-800'>12Lpa</span></h1>
         <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
         <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>13-9-2024</span></h1>
      </div>
    </div>
    </>
  )
}

export default JobDescription
