import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

const AppiedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
           <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
           </TableRow>
        </TableHeader>
        <TableBody>
          { 
           [1,].map((item,i)=> {
            return (
               <TableRow key={i}>
                   <TableCell>12-09-2024</TableCell>
                   <TableCell>Frontend Developer</TableCell>
                   <TableCell>RLG company</TableCell>
                   <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
               </TableRow>
            )
           })
           }
        </TableBody>
    </Table>
    </div>
  )
}

export default AppiedJobTable
