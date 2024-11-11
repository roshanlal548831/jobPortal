import React, { useEffect, useState } from 'react'
import Navbar from '../shard/Navbar'
import Filter from './Filter'
import Job from './Job'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import UseGetAllJobs from '@/hooks/UseGetAllJobs'

const Jobs = () => {
  UseGetAllJobs();

  const {allJobs,searchQuiry} = useSelector(store => store.job);
  const[filterJobs,setFilterJobs] = useState(allJobs);

  useEffect(()=>{
          if(searchQuiry){
            const filterJobs = allJobs.filter((job)=>{
              return  job?.title?.toLowerCase().includes(searchQuiry?.toLowerCase()) ||
              job?.description?.toLowerCase().includes(searchQuiry?.toLowerCase())||
              job?.location?.toLowerCase().includes(searchQuiry?.toLowerCase())||
              job?.salry?.toLowerCase().includes(searchQuiry?.toLowerCase())
            });
            setFilterJobs(filterJobs)
          }else{
            setFilterJobs(allJobs)
          }
  },[allJobs,searchQuiry,])
  return (
    <div>
        <Navbar/>

        <div className='max-w-7xl mx-auto mt-5'>
           <div className='flex gap-5'>    
             <div className='w-20% '>
                <Filter/>
              </div> 
            {
            filterJobs.length < 0 ? <span>Job not found</span> :(
              <div className='flex-1 h-[88v] overflow-auto pb-5'>
                 <div className='grid grid-cols-3 gap-4'>
                  {
                    filterJobs.map((item,i)=>{
                      return(
                        <motion.div
                        initial={{opacity:0,x:100}}
                        animate={{opacity:1,x:0}}
                        exit={{opacity:0,x:-100}}
                        transition={{duration: 0.3}}
                        key={i}>
                         
                           <Job job={item}/>
                        </motion.div>
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
