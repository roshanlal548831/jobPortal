import { setAuthJobs, setSingleJob } from '@/redux/job/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UseGetSingleJobs = (jobId,setIsapplied) => {
    const dispatch = useDispatch()
    const {user} = useSelector(store => store.auth)
  useEffect(()=>{
    const fetchSingleJobs = async ()=>{
        try {
            const res = await axios.get(`/api/v1/job/get/${jobId}`);
              if(res.data.success){
                dispatch(setSingleJob(res.data.job))
                setIsapplied(res.data.job.application.some(applications => applications.appicant === user.userData?._id)) // ensuer the state is 
              }
        } catch (error) {
            console.log(error)
        }
    }
    fetchSingleJobs()
  },[jobId,dispatch,user?.userData?._id])
}

export default UseGetSingleJobs
