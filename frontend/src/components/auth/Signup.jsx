import React, { useState } from 'react'
import Navbar from '../shard/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const Signup = () => {
  const[input,setInput] = useState({
    name:"",
    email:"",
    phoneNumber
  })
  return (
    <div>
    <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
          <form className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
               <h1 className='font-bold text-lx md-5 text-red-600'>Signup</h1>
               <div className='my-2'>
                   <Label>Full Name</Label>
                   <Input type="text" 
                    placeholder="Roshan"
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Email</Label>
                   <Input type="email" 
                    placeholder="roshan@gmai.com"
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Phone Number</Label>
                   <Input type="number" 
                    placeholder="877076246"
                    className="rounded-xl border border-gray-300 placeholder-gray-400 font-medium"
                   />
               </div>
               <div className='my-2'>
                   <Label>Password</Label>
                   <Input type="password" 
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
                      className="cursor-pointer"
                      />
                   <Label htmlFor="option-one">Student</Label>
                 </div>
                 <div className="flex items-center space-x-2 mx-4">
                 <Input
                    type="radio"
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
                <Input id="file" type="file"
                accept="image/*"
                className="cursor-pointer"
                />
               </div>
               </div>
               <Button type="submit" className="bg-[#ef254a] hover:bg-[#ef919f] w-full">Signup</Button>
               <span className='text-[#347b1e]'>Alredy have an account ? <Link  className='text-[#10b4d9] underline' to="/login">Login</Link></span>
          </form>
      </div>
    </div>
    
  )
}

export default Signup
