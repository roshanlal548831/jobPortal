import { setAllApplicants } from '@/redux/adminJobs/adminApplicantsSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const UseGetAllApplicantsUser = () => {
    const dispatch = useDispatch();
    const params = useParams()

    useEffect(()=>{
        const fatchApplicantUserData = async() => {
            try {
                const res = await axios.get(`/api/v1/applicatios/${params.id}/applicants`)
                if(res.data.success){
                dispatch(setAllApplicants(res?.data?.job));
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
         fatchApplicantUserData()
     },[])

}

export default UseGetAllApplicantsUser
