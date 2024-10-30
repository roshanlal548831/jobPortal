import { setallAdminJobs } from '@/redux/adminJobs/adminJobsSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseGetAllAdminJobs = () => {
    const dispatch = useDispatch()
  useEffect(()=>{
    const fetchAllAdminJobs = async ()=>{
        try {
            const res = await axios.get("/api/v1/job/get/adminjob");

              if(res.data.success){
                dispatch(setallAdminJobs(res.data.jobs))
              };

        } catch (error) {
            console.log(error)
        };
    };
    fetchAllAdminJobs()
  },[])
}

export default UseGetAllAdminJobs
