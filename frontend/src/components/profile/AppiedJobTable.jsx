import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import { useSelector } from 'react-redux'

const AppiedJobTable = () => {
  const {allAppliedJobs} = useSelector(store => store.job)
  console.log("this si aap;ied",allAppliedJobs)

  

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
          allAppliedJobs.length <= 0 ? <span className='text-red-600'>You have not applied any job.</span> : allAppliedJobs.map((item,i)=> {
            return (
               <TableRow key={i}>
                   <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
                   <TableCell>{item?.job?.title}</TableCell>
                   <TableCell>{item?.job?.company?.name}</TableCell>
                   <TableCell className="text-right"><Badge className={`${item?.status === "rejected"? "bg-red-400" : item?.status === "pending" ? "bg-gray-400" : "bg-green-400"} text-white rounded-xl`}>{item?.status}</Badge></TableCell>
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
