import React from 'react'
import Navbar from '../shard/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Contact, Contact2, Mail, Pen, Phone } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'
import AppiedJobTable from './AppiedJobTable'

const skills = ["html","css","javascript","react.js"]

const Profile = () => {

 const isResume = true

  return (
    <div>
        <Navbar/>
         <div className='items-center gap-4 max-w-7xl mx-auto border border-gray-200 rounded-2xl my-5 p-8 shadow-md'>
          <div className='flex justify-between'>
         <div className='flex items-center gap-4'>
          <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png"/>
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
              <h1 className='font-medium text-xl'>Fullname</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum architecto beatae!</p>
            </div>
          </div>
          <Button className="text-right"><Pen/></Button>
          </div>
          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <Mail/>
              <span>roshan@gmailc.com</span>
            </div>
            <div className='flex items-center gap-3'>
            <Phone/>
            <span>8770762430</span>
            </div>
            
          </div>
            <div className='my-5'>
               <h1>Skils</h1>
               <div className='flex items-center gap-1 '>
               {
              skills.length !== 0 ?  skills.map((item,i)=>{
                  return(
                    <Badge key={i}>{item}</Badge>
                  )
                }): 
                <span>NA</span>
               }
               </div>
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label className="text-md font-bold ">Resume</Label>
                {
                  isResume ? <a target='blank' href='https://youtube.com' className='text-blue-500 w-full hover:underline'>Roshanlal</a> :
                  <span>NA</span>
                }
            </div>
          </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl '>
             <h1 className='font-bold text-lg my-5'>Application table</h1>
               <AppiedJobTable/>
            </div>
       </div>
  )
}

export default Profile
