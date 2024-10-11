import React from 'react'
import Navbar from '../shard/Navbar'
import Job from '../jobs/Job'

const randomJobs = [1,2,3,4,5,6,7,8,9]

const Browse = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my'>

      <h1 className='font-bold text-xl my-10'>Search Result ({randomJobs.length})</h1>
      <div className='grid grid-cols-3 gap-4'>
      {
          randomJobs.map((item,i)=>{
              return(
                  <Job/>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Browse
