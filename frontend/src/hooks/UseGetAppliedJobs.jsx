import { setAllAppliedJobs } from '@/redux/job/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseGetAppliedJobs = () => {
    const dispatch = useDispatch()
  useEffect(()=>{
    const fetchAllAppliedJobs = async ()=>{
        try {
            const res = await axios.get("/api/v1/applicatios/get");
              if(res.data.success){
                dispatch(setAllAppliedJobs(res.data?.appliedJob))
              }
        } catch (error) {
            console.log(error)
        }
    }
    fetchAllAppliedJobs()
  },[])
}

export default UseGetAppliedJobs
