import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      <Table>
         <TableCaption> A List of your registerd companies</TableCaption>
         <TableHeader>
              <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
         </TableHeader>
         <TableBody>
              <TableCell>
                <Avatar>
                     <AvatarImage src="https://res.cloudinary.com/dma1sanje/image/upload/v1729781753/s5bk8nkdhmmqs7srn2rf.jpg"/>
                     <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Company name</TableCell>
              <TableCell>20-10-2024</TableCell>
              <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger><MoreHorizontal/> </PopoverTrigger>
                       <PopoverContent className="w-32">
                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                 <Edit2 className='w-4'/>
                                 <span>Edit</span>
                            </div>
                        </PopoverContent>
                  </Popover>
              </TableCell>
         </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
