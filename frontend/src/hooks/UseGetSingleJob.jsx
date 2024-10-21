import { setAuthJobs, setSingleJob } from '@/redux/job/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseGetSingleJobs = (jobId) => {
    const dispatch = useDispatch()

  useEffect(()=>{
    const fetchSingleJobs = async ()=>{
        try {
            const res = await axios.get(`/api/v1/job/get/${jobId}`);
              if(res.data.success){
                dispatch(setSingleJob(res.data.job))
              }
        } catch (error) {
            console.log(error)
        }
    }
    fetchSingleJobs()
  },[jobId,dispatch])
}

export default UseGetSingleJobs
