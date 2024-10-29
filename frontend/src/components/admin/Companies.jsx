import React, { useEffect, useState } from 'react'
import Navbar from '../shard/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import UseGetAllCompany from '@/hooks/UseGetAllCompany'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice/companySlice'

const Companies = () => {

  const dispatch = useDispatch()

  UseGetAllCompany();

  const[input,setInput] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(setSearchCompanyByText(input));
  },[input]);

  return (
    <div>
       <Navbar/>
       <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input type="text" 
                   name="email"
                   placeholder="Filter by name"
                   className="rounded-xl w-9 border border-gray-300 placeholder-gray-400 font-medium"
                   onChange={(e)=> setInput(e.target.value)}
                   />
                 <Button onClick={()=> navigate("/admin/companies/create")} className="my-2 border hover:bg-[#ebe6e6]">New Company</Button>  
           </div>
           <CompaniesTable/>
       </div>
    </div>
  )
}

export default Companies
