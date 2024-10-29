import { setSigleCompany } from '@/redux/companySlice/companySlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseGetCompanyById = (companyId) => {
    const dispatch = useDispatch()
  useEffect(()=>{
    const fetchSingleCompany = async ()=>{
        try {
            const res = await axios.get(`/api/v1/company/get/${companyId}`);
              if(res.data.success){
                dispatch(setSigleCompany(res.data.company))
              }
        } catch (error) {
            console.log("this is error ",error)
        }
    }
    fetchSingleCompany()
  },[companyId])
}

export default UseGetCompanyById
