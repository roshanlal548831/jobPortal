import React, { useState } from 'react'
import Navbar from '../shard/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSigleCompany } from '@/redux/companySlice/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
   const dipatch = useDispatch()
    const[companyName,setCompanyName] = useState("")

    const input = ({
        companyName: companyName
    });

    const registerNewCompany = async() => {
       
        try {
            const res = await axios.post("/api/v1/company/register",input)
            if(res.data.success){
                dipatch(setSigleCompany(res.data.company));
                toast.success(res.data.message);
                const companyid = res.data.company?._id;
                navigate(`/admin/companies/${companyid}`)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

  return (
    <div className='sm:px-4 md:px-0'>
        <Navbar/>
       <div className='max-w-4xl mx-auto'>
        <div className='my-10'>
          <h1 className='font-bold text-2xl'>Your company name</h1>
            <p className='text-gray-500'>What would you like give your company name ? ypu can change this later.</p>
        </div>
        
            <Label>Company Name</Label>
            <Input type="text" onChange={(v) => setCompanyName(v.target.value)} value={companyName} className="border rounded-xl my-2 " placeholder="JobHunt ers"/>
            <div className='flex items-center gap-2 my-10'>
                  <Button onClick={()=> navigate("/admin/companies")} variant="outline">Cancel</Button>
                  <Button onClick={()=>registerNewCompany()} className="bg-black text-white">Continue</Button>
            </div>
       </div>
    </div>
  )
}

export default CompanyCreate
