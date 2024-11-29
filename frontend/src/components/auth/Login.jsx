import React, { useEffect, useState } from 'react';
import Navbar from '../shard/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';


const Login = () => {
  const navigation = useNavigate()
 const dipatch = useDispatch();


 const {loading,user} = useSelector(store => store.auth)

  const[input,setInput] = useState({
    email:"",
    password:"",
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

  const handleSubmit = async(e) => {
  e.preventDefault();
  try {
    dipatch(setLoading(true))
    const res = await axios.post("/api/v1/user/login",input)
    if(res.data.success){
      dipatch(setAuthUser(res.data))
      navigation("/")
      toast.success(res.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }finally{
    dipatch(setLoading(false))
  }
};


useEffect(()=>{
 if(user){
  navigation('/')
 }
},[])

  return (
    <div>
    <Navbar/>
      <motion.div
       initial={{opacity:0,x:100}}
       animate={{opacity:1,x:0}}
       exit={{opacity:0,x:-100}}
       transition={{duration: 0.3}}
        className='flex items-center justify-center max-w-7xl mx-auto'>
          <form onSubmit={handleSubmit} className='md:w-1/2 border sm:w-full border-gray-200 rounded-md p-4 my-10'>
               <h1 className='font-bold text-lx md-5 text-red-600'>Login</h1>
               <div className='my-2'>
                   <Label>Email</Label>
                   <Input type="email" 
                   name="email"
                    placeholder="xyz@gmai.com"
                    value={input.email}
                    onChange={handleChange}
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Password</Label>
                   <Input type="password" 
                   name="password"
                    value={input.password}
                    onChange={handleChange}
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
                      onChange={handleChange}
                      name="role"
                      className="cursor-pointer"
                      />
                   <Label htmlFor="option-one">Student</Label>
                 </div>
                 <div className="flex items-center space-x-2 mx-4">
                 <Input
                    type="radio"
                     value="recruiter"
                      id="option-one"
                      onChange={handleChange}
                      name="role"
                      className="cursor-pointer"
                      />
                   <Label htmlFor="option-two">Recruiter</Label>
                 </div>
                </div>
                </RadioGroup>
               </div>
               {
              loading? <button className="flex justify-center w-full h-9  items-center"> <Loader2 className='mr-2 h-4 w-4 animate-spin text-center text-[#20bdd2]'/><h1 className='text-red-600 font-bold'>Please wait </h1></button>:
              <button  type="submit" className="bg-[#ef254a] hover:bg-[#ef919f] w-full h-9">Login</button>
               } 
               <span className='text-red-500'>Don't have an account ? <Link  className='text-[#10b4d9] underline' to="/signup">Signup</Link></span>
          </form>
      </motion.div>
    </div>
    
  )
}

export default Login
