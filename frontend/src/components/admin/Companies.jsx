import React from 'react'
import Navbar from '../shard/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Companies = () => {
  return (
    <div>
       <Navbar/>
       <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
            <Input type="text" 
                   name="email"
                   placeholder="Filter by name"
                   className="rounded-xl w-36 border border-gray-300 placeholder-gray-400 font-medium"
                   />
                 <Button className="my-2 border">New Company</Button>  
           </div>
       </div>
    </div>
  )
}

export default Companies
