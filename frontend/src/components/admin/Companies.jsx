import React from 'react'
import Navbar from '../shard/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
  const navigate = useNavigate()
  return (
    <div>
       <Navbar/>
       <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input type="text" 
                   name="email"
                   placeholder="Filter by name"
                   className="rounded-xl w-36 border border-gray-300 placeholder-gray-400 font-medium"
                   />
                 <Button onClick={()=> navigate("/admin/companies/create")} className="my-2 border hover:bg-black">New Company</Button>  
           </div>
           <CompaniesTable/>
       </div>
    </div>
  )
}

export default Companies
