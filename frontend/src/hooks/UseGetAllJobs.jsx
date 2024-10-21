import { setAuthJobs } from '@/redux/job/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseGetAllJobs = () => {
    const dispatch = useDispatch()
  useEffect(()=>{
    const fetchAllJobs = async ()=>{
        try {
            const res = await axios.get("/api/v1/job/get");
              if(res.data.success){
                dispatch(setAuthJobs(res.data.jobs))
              }
        } catch (error) {
            console.log(error)
        }
    }
    fetchAllJobs()
  },[])
}

export default UseGetAllJobs
