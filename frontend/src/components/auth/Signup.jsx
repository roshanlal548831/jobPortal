import React, { useState } from 'react'
import Navbar from '../shard/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'


const Signup = () => {

  const navigation = useNavigate()
  const dipatch = useDispatch();
  const {loading} = useSelector(store => store.auth)

  const[input,setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber: "",
    password:"",
    file:"",
    role:""
  })
  const handleChange = (v) => {
     const {name,value} = v.target
      setInput(
        {
          ...input,[name]:value
        }
      )
  };

  const changeFile = (e) =>{
         setInput({...input,profilePhoto:e.target.files?.[0]?.name})
  }
const handleSubmit = async(e) => {
  e.preventDefault();
  try {
    dipatch(setLoading(true))
    const res = await axios.post("/api/v1/user/register",input)
    if(res.data.success){
      dipatch(setAuthUser(res.data))
      navigation("/login")
      toast.success(res.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }finally{
    dipatch(setLoading(false))
  }
}
  return (
    <div>
    <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
          <form  onSubmit={handleSubmit} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
               <h1 className='font-bold text-lx md-5 text-red-600'>Signup</h1>
               <div className='my-2'>
                   <Label>Full Name</Label>
                   <Input 
                   placeholder="Roshan"
                   value={input.fullname}
                   type="text" 
                    name="fullname"
                    onChange={handleChange}
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Email</Label>
                   <Input type="email"
                    onChange={handleChange}
                   name="email" 
                   value={input.email}
                    placeholder="roshan@gmai.com"
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Phone Number</Label>
                   <Input type="number" 
                   onChange={handleChange}
                   name="phoneNumber"
                   value={input.phoneNumber}
                    placeholder="877076246"
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Password</Label>
                   <Input type="password" 
                    onChange={handleChange}
                      value={input.password}
                   name="password"
                    placeholder="***********"
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='flex justify-between'>
               <RadioGroup defaultValue="option-one">
                <div className='flex items-center '>
                <div className="flex items-center space-x-2 mx-4">
                   <Input
                    type="radio"
                     value="student"
                      id="option-one"
                      name="role"
                      onChange={handleChange}
                      className="cursor-pointer"
                      />
                   <Label htmlFor="option-one">Student</Label>
                 </div>
                 <div className="flex items-center space-x-2 mx-4">
                 <Input
                    type="radio"
                    onChange={handleChange}
                     value="recruiter"
                      id="option-one"
                      name="role"
                      className="cursor-pointer"
                      />
                   <Label htmlFor="option-two">Recruiter</Label>
                 </div>
                </div>
                </RadioGroup>
                <div className='flex items-center gap-2'>
                <Label htmlFor="file">Profile</Label>
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
              <button  type="submit" className="bg-[#ef254a] hover:bg-[#ef919f] w-full h-9">Signup</button>
               }                <span className='text-[#347b1e]'>Alredy have an account ? <Link  className='text-[#10b4d9] underline' to="/login">Login</Link></span>
          </form>
      </div>
    </div>
    
  )
}

export default Signup
