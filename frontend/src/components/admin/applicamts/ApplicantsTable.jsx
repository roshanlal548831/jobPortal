import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow, 
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';

const shortlistingStatus = ["Accept","Rejact"]

import React from 'react';


const ApplicantsTable = () => {

  return (
    <div>
        <Table>
  <TableCaption>A list of your recent applied user.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead >FullName</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Contact</TableHead>
      <TableHead >Resume</TableHead>
      <TableHead >date</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <tr>
      <TableCell >INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell >$250.00</TableCell>
      <TableCell >$250.00</TableCell>
      <TableCell className="text-right">
        <Popover>
             <PopoverTrigger>
                  <MoreHorizontal/>
                  <PopoverContent className="w-32">
                  {
                       shortlistingStatus.map((status,i)=>{
                           return(
                               <div key={i} className='gap-2'>
                                   <span>{status}</span>
                               </div>
                           )
                       })
                     }
                  </PopoverContent>
             </PopoverTrigger>
        </Popover>
      
      </TableCell>
    </tr>
  </TableBody>
</Table>
    </div>
  )
}

export default ApplicantsTable
