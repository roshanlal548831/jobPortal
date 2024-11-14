import React, { useState } from 'react'

import { Menu, X } from 'lucide-react'
import NavLink from './NavLink'

const Navbar = () => {
  const[isOpen,setIsOpen] = useState(false)

   const togglenavbar = ()=>{
    setIsOpen(!isOpen)

   }
  return (
    <div className='bg-white'>
    <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
       <div>
        <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='md:hidden'>
         <button onClick={togglenavbar}>{isOpen? <X/> :<Menu className='size-11'/>}</button>
        </div>
        <div className='md:flex hidden items-center gap-4'>
         <NavLink/>
        </div>
    </div>
       <div>
        {
          isOpen && (
            <div className='md:opacity-0 flex flex-col  opacity-100'>
               <NavLink/>
            </div>
          )
        }
       </div>
    </div>
  )
}

export default Navbar
