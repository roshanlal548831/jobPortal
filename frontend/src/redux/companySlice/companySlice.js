import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByText:"",
    },
    reducers:{
        setSigleCompany:(state,action) => {
            state.singleCompany = action.payload
        },
        setAllCompany:(state,action) => {
            state.companies = action.payload
        },
        setSearchCompanyByText:(state,action)=>{
            state.searchCompanyByText = action.payload
        }
    },
  
})

export const {setSigleCompany,setAllCompany,setSearchCompanyByText} = companySlice.actions
export default companySlice.reducer