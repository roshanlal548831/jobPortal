import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div>
      <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 '>
        <div>
         <h1 className='font-medium text-lg '>Company Name</h1>
           <p className='text-sm text-gray-500'>India</p>
        </div>
         <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor, Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit.</p>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Positions</Badge>
                <Badge className={"text-[#F83002] font-bold"} variant="ghost">12 part Time</Badge>
                <Badge className={"text-[#720B97] font-bold"} variant="ghost">24 LPA</Badge>
            </div>
         </div>
      </div>
    </div>
  )
}

export default LatestJobCards
