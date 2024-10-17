import React, { useState } from 'react'
import Navbar from '../shard/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Contact, Contact2, Mail, Pen, Phone } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'
import AppiedJobTable from './AppiedJobTable'
import UpdatedProfileDialog from './UpdatedProfileDialog'
import { useSelector } from 'react-redux'


const Profile = () => {


const {user} = useSelector(store => store.auth)
 const isResume = true


 const [open,setOpen] = useState(false)

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
              <h1 className='font-medium text-xl'>{user.userData.fullname}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum architecto beatae!</p>
            </div>
          </div>
          <Button className="text-right" onClick={()=> setOpen(true)}><Pen/></Button>
          </div>
          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <Mail/>
              <span>{user.userData.email}</span>
            </div>
            <div className='flex items-center gap-3'>
            <Phone/>
            <span>{user.userData.phoneNumber}</span>
            </div>
            
          </div>
            <div className='my-5'>
               <h1>{user.userData.profile.bio}</h1>
               <div className='flex items-center gap-4 mt-2 '>
               {
              user.userData.profile.skills.length !== 0 ?  user.userData.profile.skills.map((item,i)=>{
                  return(
                    <Badge className="bg-[#080505] text-[#FFFF]  rounded-xl hover:bg-black" key={i}>{item}</Badge>
                  )
                }): 
                <span>NA</span>
               }
               </div>
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label className="text-md font-bold ">Resume</Label>
                {
                  isResume ? 
                  <>
                  {/* <embed src={user.userData.profile.resume} width="100%" height="600px" type="application/pdf" /> */}
                  <a target='blank'  href={user.userData.profile.resume} className='text-blue-500 w-full hover:underline'>{user.userData.profile.resumeOriginalName}</a>
                  </>
                  
                  :
                  <span>NA</span>
                }
            </div>
          </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl '>
             <h1 className='font-bold text-lg my-5'>Application table</h1>
               <AppiedJobTable/>
            </div>
            <UpdatedProfileDialog open={open} setOpen={setOpen}/>
       </div>
  )
}

export default Profile
