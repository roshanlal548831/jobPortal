import React, { useEffect, useState } from 'react'
import Navbar from '../shard/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'

const CompanySetup = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {singleCompany} = useSelector(store => store.company);
  console.log(singleCompany)

  const[loading,setLoading] = useState(false)

  const[input,setInput] = useState({
    name:"",
    description:"",
    website:"",
    location:"",
    file:"",
  });
  
  

  const changeEventHandler = (v) => {
    setInput({...input,[v.target.name]:v.target.value})
  }

  const changeFile = (e) =>{
    const changeFile = e.target.files?.[0]
  if(changeFile)setInput({...input,file:changeFile});
 }

  const handleFormdata = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",input.name)
    formData.append("description",input.description)
    formData.append("website",input.website)
    formData.append("location",input.location);
    if(input.file){
      formData.append("logo",input.file)
    }
    try {
      setLoading(true)
       const res = await axios.put(`/api/v1/company/update/${params.id}`,formData);
       console.log(res)
       if(res.data.success){
         toast.success(res.data.message);
         navigate("/admin/companies");
       }
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    setInput({
         name:singleCompany.name || "",
          description:singleCompany.description || "",
          website:singleCompany.website || "",
          location:singleCompany.location || "",
          file:singleCompany.logo || "",
    })
  },[singleCompany])

  return (
    <div>
     <Navbar/>
     <div className='max-w-xl mx-auto my-10'>
        <form onSubmit={handleFormdata}>
          <div className='flex items-center gap-5 p-8'>
          <Button className="flex items-center gap-2 text-gray-500 font-semibold">
              <ArrowLeft/>
              <span>Back</span>
             </Button>
             <h1 className='font-bold '>Company Setup</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>

            <div>
            <Label>Company Name</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="name"
                placeholder="Company name"
                 value={input.name}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>Description</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="description"
                placeholder="Company name"
                 value={input.description}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>Website</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="website"
                placeholder="Company name"
                 value={input.website}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>Location</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="location"
                placeholder="Company name"
                 value={input.location}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>Logo</Label>
            <Input id="file"
                 type="file"
                 onChange={changeFile}
                 accept="image/*"
        
                 className="cursor-pointer"
                />
            </div>

          </div>
          {
              loading? <button className="flex justify-center w-full h-9  items-center"> <Loader2 className='mr-2 h-4 w-4 animate-spin text-center text-[#20bdd2]'/><h1 className='text-red-600 font-bold'>Please wait </h1></button>:
              <button  type="submit" className="bg-[#ef254a] hover:bg-[#ef919f] w-full h-9">Login</button>
               } 
        </form>
     </div>
    </div>
  )
}

export default CompanySetup
