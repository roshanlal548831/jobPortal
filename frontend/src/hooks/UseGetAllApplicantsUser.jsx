import axios from 'axios'
import React, { useEffect } from 'react'

const UseGetAllApplicantsUser = () => {
    useEffect(()=>{
        const fatchApplicantUserData = async() => {
            try {
                const res = await axios.get(`/api/v1/applicatios/6725d46b79a942a272b771db/applicants`)
                if(res.data.success){
                    console.log(res.data)
                }
            } catch (error) {
                
            }
        }
         fatchApplicantUserData()
     },[])

}

export default UseGetAllApplicantsUser
