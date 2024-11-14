import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'


const LetestJobs = () => {
  const {allJobs} = useSelector(store => store.job)
  return (
    <div className='max-w-7xl mx-auto my-20'>
       <h1 className='text-4xl'><span className='text-[#6A38C2]'>Latest & Top </span>Job Openings</h1>
       <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-5 '>
       {
        allJobs?.length !== 0 ? allJobs.slice(0,6).map((item,index)=> <LatestJobCards key={index} job={item} />): <div className='text-center text-2xl text-[#f13838] font-bold'><span>No Job  Available</span></div>
       }
       </div>
    </div>
  )
}

export default LetestJobs
