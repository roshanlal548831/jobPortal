import React from 'react'
import Navbar from '../../shard/Navbar'
import ApplicantsTable from './ApplicantsTable'
import UseGetAllApplicantsUser from '@/hooks/UseGetAllApplicantsUser'
import { useSelector } from 'react-redux'
import { applescript } from 'globals'

const Applicants = () => {
  UseGetAllApplicantsUser();
  const {allApplicants} = useSelector(store => store.applicant);
  
  return (
    <div>
      <Navbar/>
       <div className='max-w-7xl mx-auto'>
           <h1 className='font-bold'>Applicants {`(${allApplicants?.application?.length})`}</h1>
           <ApplicantsTable/>
       </div>
    </div>
  )
}

export default Applicants