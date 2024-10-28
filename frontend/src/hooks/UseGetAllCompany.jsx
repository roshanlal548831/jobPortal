import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllCompany } from '@/redux/companySlice/companySlice'

const UseGetAllCompany = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchAllCompany = async ()=>{
            try {
                const res = await axios.get(`/api/v1/company/get`);
                 dispatch(setAllCompany(res.data.companies))
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllCompany()
    })
  
}

export default UseGetAllCompany
