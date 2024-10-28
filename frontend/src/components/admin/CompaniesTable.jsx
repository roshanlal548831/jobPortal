import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import UseGetAllCompany from '@/hooks/UseGetAllCompany'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
  UseGetAllCompany()
const {companies} = useSelector(store => store.company);
console.log(companies.description)
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
          {
            companies.length < 0 ? <span>You haven't registred any company yet</span> :
            companies.map((companiesData,i)=>{
              return (  
                <>
                 <TableCell>
                    <Avatar>
                         <AvatarImage src={companiesData.logo}/>
                         <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{companiesData.name}</TableCell>
                  <TableCell>{companiesData.createdAt.split("T")[0]}</TableCell>
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
                </>
                )
            })
         
          }
             
         </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
