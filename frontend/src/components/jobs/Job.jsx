import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {

  const jobsId = "d4fd6sf4ds6f4ds6f4"

  const navigate = useNavigate()
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-300'>
        <div className='flex items-center justify-center'>

        </div>
       <p className='text-sm text-gray-500'> 2 days ago</p>
       <Button  className="rounded-full border" size="icone"><Bookmark/></Button>
       <div className='flex items-center gap-2 my-2'>
         <Button>
           <Avatar>
            <AvatarImage src="https://www.src.org/web/img/SRC_logo_blue.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
           </Avatar>
         </Button>
         <div>
            <h1 className='font-medium text-lg'>Company name</h1>
            <p className='text-sm text-gray-500'>India</p>
         </div>
       </div>
       <div> 
             <h1 className='font-bold text-lg my-2'>Title</h1>
             <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt quos ex voluptas, laudantium tenetur dolores voluptatem suscipit voluptates deserunt?z</p>
       </div>
       <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Positions</Badge>
                <Badge className={"text-[#F83002] font-bold"} variant="ghost">12 part Time</Badge>
                <Badge className={"text-[#720B97] font-bold"} variant="ghost">24 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
            <Button onClick={() => navigate(`description/${jobsId}`)}>Details</Button>
            <Button className="bg-[#720B97] text-white rounded-md">Save For Latter</Button>
            </div>
    </div>
  )
}

export default Job
