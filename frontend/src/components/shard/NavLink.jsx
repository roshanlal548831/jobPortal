import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogIn, LogOut, Menu, User, User2, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser } from '@/redux/authSlice'
import axios from 'axios'
import { toast } from 'sonner'

const NavLink = () => {
    const {user} = useSelector(store => store.auth);
 
 
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const logouthandler = async() => {
      try {
       const res = await axios.get("/api/v1/user/logout");
       if(res.data.success){
         dispatch(setAuthUser(null))
         navigate("/login")
         toast.success(res.data.message)
         
       }
      } catch (error) {
       toast.error(error.response.data.message)
       console.log(error)
      }
    };
  return (
   <>
    <ul className='font-medium md:gap-5 md:flex md:items-center ml-4'>
     {
       user && user?.userData?.role === "recruiter" ? (
         <>
           <li className='my-4'><Link to="/admin/companies">Companies</Link></li>
           <li className='my-4'><Link to="/admin/jobs">Jobs</Link></li>
         </>
       ) 
       :
       <>
          <li className='my-4'><Link to="/">Home</Link></li>
          <li className='my-4'><Link to="/jobs">Jobs</Link></li>
          <li className='my-4'><Link to="/browse">Browse</Link></li>
       </>
     }
       
    </ul>
   {
     !user ? (
      <div className='grid grid-cols-1 md:flex'>
       <Link to="/login"><Button className="text-[#2c96ab] hover:text-[#88ddf2]" variant="link">Login</Button></Link>
       <Link to="/signup"><Button  className="text-[#2c96ab] hover:text-[#88ddf2]" variant="link">Signup</Button></Link>
      </div>
     ):(
       <Popover>
       <PopoverTrigger asChild>
       <Avatar className="cursor-pointer sm:ml-3 md:ml-0">
          <AvatarImage src={user?.userData?.profile?.profilePhoto} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
       </Avatar>
      </PopoverTrigger>
        <PopoverContent className="w-80">
            <div className='flex gap-4 space-y-2'>
            <Avatar className="cursor-pointer">
                <AvatarImage src={user?.userData?.profile?.profilePhoto} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
             </Avatar>
             <div>
                 <h4 className='font-medium'>{user?.userData?.fullname}</h4>
                 <p className='text-sm text-muted-foreground'>{user?.userData?.email}</p>
             </div>
            </div>
            <div className='flex flex-col gap-3 text-gray-600 my-2'>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                   
                    {
                     user && user?.userData?.role !== "recruiter"?(
                       <>
                       <User2/>
                        <Link to={`/profile`}><Button variant="link">View profile</Button></Link>
                       </>
                     ): ""
                    }
                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut/>
                  <Button onClick={logouthandler} variant="link">Logout</Button>
                </div>
            </div>
            
        </PopoverContent>
       </Popover>
     )
   }
</>
  )
}

export default NavLink
