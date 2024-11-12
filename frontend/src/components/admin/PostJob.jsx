import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Navbar from '../shard/Navbar'
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
 } from '../ui/select';
import axios from 'axios';
import { toast } from 'sonner';


const companyArray = [];
const PostJob = () => {
    const {companies} = useSelector(store => store.company);
    const navigate = useNavigate();
    const[loading,setLoading] = useState(false);
    const[input,setInput] = useState({
        title:"",
        description:"",
        requirements:"",
        salary:0,
        location:"",
        jobType:"",
        experience:0,
        position:0
    });
    const changeEventHandler =  (e) => {
      setInput({
        ...input,[e.target.name]:e.target.value
      })
    };

    const selectChangeHandler = (v) => {
         const selectedCompany = companies.find((company)=> company.name.toLowerCase() === v);
         setInput({...input,companyId:selectedCompany._id})
    }

    const handlerSubmin = async(e) => {
        e.preventDefault();

       try {
        setLoading(true)
        const res = await axios.post("/api/v1/job/post",input);
        if(res.data.success){
          toast.success(res.data.message);
          navigate("/admin/jobs")
        }
       } catch (error) {
        toast.error(error.response.data.message)
       }finally{
        setLoading(false)
       }
    }

  return (
    <div>
     <Navbar/>
     <div className='max-w-xl mx-auto my-10 border border-gray-200 p-4 rounded-md shadow-lg'>
        <form onSubmit={handlerSubmin}>
          <div className='flex items-center gap-5 p-8'>
          <Link className="flex items-center gap-2 text-gray-500 font-semibold" to="/admin/jobs">
              <ArrowLeft/>
              <span>Back</span>
             </Link>
             <h1 className='font-bold '>Job Setup</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>

            <div>
            <Label>Title</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="title"
                placeholder="Title"
                 value={input.title}
               onChange={changeEventHandler}
             />
            </div>
            <div>
            <Label>Deccription</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="description"
                placeholder="Description"
                 value={input.description}
               onChange={changeEventHandler}
             />
            </div>
            <div>
            <Label>Requirements</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="requirements"
                placeholder="Requirements"
                 value={input.requirements}
               onChange={changeEventHandler}
             />
            </div>
            <div>
            <Label>Salary</Label>
          <Input
             className="border border-gray-400"
              type="number"
                name="salary"
                placeholder="Salary"
                 value={input.salary}
               onChange={changeEventHandler}
             />
            </div>
            <div>
            <Label>Location</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="location"
                placeholder="Location"
                 value={input.location}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>JobType</Label>
          <Input
             className="border border-gray-400"
              type="text"
                name="jobType"
                placeholder="JobGType"
                 value={input.jobType}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>Experience</Label>
          <Input
             className="border border-gray-400"
              type="number"
                name="experience"
                placeholder="Your experience"
                 value={input.experience}
               onChange={changeEventHandler}
             />
            </div>

            <div>
            <Label>No of Position</Label>
          <Input
             className="border border-gray-400"
              type="number"
                name="position"
                placeholder="position"
                 value={input.position}
               onChange={changeEventHandler}
             />
            </div>
          </div>

         {
            companies.length > 0 && (
              <Select onValueChange={selectChangeHandler}>
                 <SelectTrigger className="w-[180px]">
                     <SelectValue placeholder="Select a company" />
                     </SelectTrigger>
                 <SelectContent>
             <SelectGroup>
          {
                    companies.map((company,i)=> {
                        return(
                          <SelectItem value={company?.name.toLowerCase()} key={i}>{company?.name}</SelectItem>
                        )
                    })
                  }
         
        </SelectGroup>
      </SelectContent>
    </Select>
            )
         }
         
         
          <div className='mt-5'>
          {
              loading? <button className="flex justify-center w-full h-9  items-center"> <Loader2 className='mr-2 h-4 w-4 animate-spin text-center text-[#20bdd2]'/><h1 className='text-black font-bold'>Please wait </h1></button>:
              <button  type="submit" className="bg-[#050505] text-white hover:bg-[#0e0d0d] w-full h-9">Post new job</button>
               } 

             {
                companies.length  <= 0 && <p className='text-sm text-red-600 font-bold text-center*'>Please register a Company first, before posting  a jobs</p>
             }  

          </div>
        </form>
     </div>
    </div>
  )
}

export default PostJob
