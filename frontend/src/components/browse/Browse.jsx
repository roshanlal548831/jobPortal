import React, { useEffect } from 'react'
import Navbar from '../shard/Navbar'
import Job from '../jobs/Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuiry } from '@/redux/job/jobSlice'
import UseGetAllJobs from '@/hooks/UseGetAllJobs'


const Browse = () => {
  UseGetAllJobs();
  const {allJobs} = useSelector(store => store.job);
  const dispatch = useDispatch()
  
  useEffect(()=>{
   return ()=>{
       dispatch(setSearchQuiry(""))
   }
  },[])

  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my'>

      <h1 className='font-bold text-xl my-10'>Search Result ({allJobs?.length})</h1>
      <div className='grid grid-cols-3 gap-4'>
      {
          allJobs.map((job,i)=>{
              return(
                  <Job key={i} job={job}/>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Browse
