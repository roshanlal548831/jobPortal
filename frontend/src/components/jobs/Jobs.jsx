import React from 'react'
import Navbar from '../shard/Navbar'
import Filter from './Filter'
import Job from './Job'
import { useSelector } from 'react-redux'
const jobsArray = [1,2,3,4,5,6,7,8,]
const Jobs = () => {
  const {allJobs} = useSelector(store => store.job)
  return (
    <div>
        <Navbar/>

        <div className='max-w-7xl mx-auto mt-5'>
           <div className='flex gap-5'>    
             <div className='w-20% '>
                <Filter/>
              </div> 
            {
            allJobs.length < 0 ? <span>Job not found</span> :(
              <div className='flex-1 h-[88v] overflow-auto pb-5'>
                 <div className='grid grid-cols-3 gap-4'>
                  {
                    allJobs.map((item,i)=>{
                      return(
                        <div key={i}>
                           <Job job={item}/>
                        </div>
                      )
                    }) 
                  }
                 </div>
              </div>
            )
             
            } 
           </div>
        </div>
      
    </div>
  )
}

export default Jobs
