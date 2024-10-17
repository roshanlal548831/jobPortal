import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { setAuthUser } from '@/redux/authSlice'

const UpdatedProfileDialog = ({open,setOpen}) => {
   
     const dispatch = useDispatch();

     const {user} = useSelector(store => store.auth);

     const [loading,setLoading] = useState(false);

     const[input,setInput] = useState({
        fullname:user?.userData?.fullname,
        email:user?.userData?.email,
        phoneNumber:user?.userData?.phoneNumber,
        bio:user?.userData?.profile?.bio,
        skills:user.userData?.profile?.skills.map(skill => skill),
        file:user.userData?.profile?.resume
     })
    
// const handleOnchange = (e) => {
//     setInput({...input,e.target.value})
// }

const changeFile = (e) =>{
   const file = e.target.files?.[0]
    if(file)setInput({...input,file:file});
}

const handleSubmit = async(e) => {
  e.preventDefault()
    const formData = new FormData()
   formData.append("fullname",input.fullname)
   formData.append("email",input.email)
   formData.append("phoneNumber",input.phoneNumber)
   formData.append("bio",input.bio)
   formData.append("skills",input.skills);
   if(input.file){
      formData.append("file",input.file)
    }
    try {
       
      setLoading(true)
      const res = await axios.post("/api/v1/user/profile/update",formData,{
         headers:{
           "Content-Type": "multipart/form-data"
         },
         withCredentials:true
       });
      dispatch(setAuthUser(res.data))
      toast.success(res.data.message)
      setOpen(false)
     } catch (error) {
      toast.error(error.response.data.message)
     }finally{
      setLoading(false)
   }
}

  return (
    <div>
       <Dialog open={open}>
          <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=>setOpen(false)}>
           <DialogHeader>
              <DialogTitle>Update Profile</DialogTitle>
              <form onSubmit={handleSubmit}>
                 <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="name" className="text-right">Name</Label>
                     <Input type="text" 
                     id="name"
                     className="col-span-3 border-spacing-2 shadow-xl font-semibold text-gray-900"
                     placeholder="Update your name"
                     name="fullname"
                     value={input.fullname}
                     onChange={(e) => setInput({...input,fullname:e.target.value})}
                     />
                    </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="email" className="text-right">Email</Label>
                     <Input type="email" 
                     id="email"
                     className="col-span-3 border-spacing-2 shadow-xl font-semibold text-gray-900"
                     placeholder="Update your email"
                     name="email"
                     value={input.email}
                     onChange={(e) => setInput({...input,email:e.target.value})}
                     />
                    </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="phoneNumber" className="text-right">Phone</Label>
                     <Input type="number" 
                     id="phoneNumber"
                     className="col-span-3 border-spacing-2 shadow-xl font-semibold text-gray-900"
                     placeholder="Update your bio"
                     name="phoneNumber"
                     value={input.phoneNumber}
                     onChange={(e) => setInput({...input,phoneNumber:e.target.value})}
                     />
                    </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="bio" className="text-right">Bio</Label>
                     <Input type="text" 
                     id="bio"
                     className="col-span-3 border-spacing-2 shadow-xl font-semibold text-gray-900"
                     placeholder="Update your bio"
                     name="bio"
                     value={input.bio}
                     onChange={(e) => setInput({...input,bio:e.target.value})}
                     />
                    </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="skills" className="text-right">Skills</Label>
                     <Input type="text" 
                     id="skills"
                     className="col-span-3 border-spacing-2 shadow-xl font-semibold text-gray-900"
                     placeholder="Update your bio"
                     name="skills"
                     value={input.skills}
                     onChange={(e) => setInput({...input,skills:e.target.value})}
                     />
                    </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="file" className="text-right">Resume</Label>
                     <Input type="file" 
                     id="file"
                     className="col-span-3 border-spacing-2 shadow-xl font-semibold text-gray-900"
                     placeholder="Update your bio"
                     name="file"
                     // accept="application/pdf"
                     value={input.profilePhoto}
                     onChange={changeFile}
                     />
                    </div>
                  
                    <DialogFooter>
            {
                           loading? <button className="flex justify-center w-full h-9  items-center"> <Loader2 className='mr-2 h-4 w-4       animate-spin       text-center text-[#20bdd2]'/><h1 className='text-red-600 font-bold'>Please wait </h1></button>:
                            <button  type="submit" className="bg-[#ef254a] hover:bg-[#ef919f] w-full h-9">Update</button>
            }   
                    </DialogFooter>
                 </div>
              </form>
           </DialogHeader>
          </DialogContent>
       </Dialog>
    </div>
  )
}

export default UpdatedProfileDialog
