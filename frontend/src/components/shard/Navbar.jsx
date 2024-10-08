import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogIn, LogOut, User, User2 } from 'lucide-react'

const Navbar = () => {
   const user = false
  return (
    <div className='bg-white'>
    <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
    <div>
        <h1 className='text-2xl font-bold'>Job <span className='text-[#F83002]'>Portal</span></h1>
        </div>
   
      <div className='flex items-center gap-4'>
           <ul className='flex font-medium gap-5'>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/jobs">Jobs</Link></li>
               <li><Link to="/browse">Browse</Link></li>
           </ul>
          {
            !user ? (
             <div>
              <Link to="/login"><Button  className="text-[#2c96ab] hover:text-[#88ddf2]" variant="link">Login</Button></Link>
              <Link to="/signup"><Button  className="text-[#2c96ab] hover:text-[#88ddf2]" variant="link">Signup</Button></Link>
             </div>
            ):(
              <Popover>
              <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                 <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                 <AvatarFallback>CN</AvatarFallback>
              </Avatar>
             </PopoverTrigger>
               <PopoverContent className="w-80">
                   <div className='flex gap-4 space-y-2'>
                   <Avatar className="cursor-pointer">
                       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                       <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className='font-medium'>Roshan Verma</h4>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                    </div>
                   </div>
                   <div className='flex flex-col gap-3 text-gray-600 my-2'>
                       <div className='flex w-fit items-center gap-2 cursor-pointer'>
                           <User2/>
                            <Button variant="link">View profile</Button>
                       </div>
                       <div className='flex w-fit items-center gap-2 cursor-pointer'>
                         <LogOut/>
                         <Button variant="link">Logout</Button>
                       </div>
                   </div>
                   
               </PopoverContent>
              </Popover>
            )
          }
      </div>
    </div>
       
    </div>
  )
}

export default Navbar
