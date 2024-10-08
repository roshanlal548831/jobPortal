import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
             <span className='px-4 py-2 rounded-full mx-auto text-[#F83002] font-medium bg-gray-200'>No . 1 Job Hunt Website</span>
             <h1 className='text-5xl font-bold'>Search , Apply & <br/> Get Your <span className='text-[#6A38C2]'>Drem Job</span></h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odio distinctio ea porro voluptatibus?</p>
             <div className='flex w-[40%] pl-3 shadow-lg border border-gray-200 rounded-full items-center gap-4 mx-auto '>
             <input type="text" 
             placeholder='Find your drem jobs'
             className='outline-none   w-full p-2 '
             />
             <Button className="rounded-r-full bg-[#6A38C2] hover:bg-[#9a83c1] text-white"><Search/></Button>
             </div>
            
        </div>
    </div>
  )
}

export default HeroSection
