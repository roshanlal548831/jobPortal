import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut, User, User2 } from 'lucide-react'

const Navar = () => {
  return (
    <div className='bg-white'>
    <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
    <div>
        <h1 className='text-2xl font-bold'>Job <span className='text-[#F83002]'>Portal</span></h1>
        </div>
   
      <div className='flex items-center gap-4'>
           <ul className='flex font-medium gap-5'>
               <li>Home</li>
               <li>Jobs</li>
               <li>Browse</li>
           </ul>
          
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
                     <h4 classN ame='font-medium'>Roshan Verma</h4>
                     <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                 </div>
                </div>
                <div className='flex flex-col gap-3 text-gray-600'>
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
         
      </div>
    </div>
       
    </div>
  )
}

export default Navar
