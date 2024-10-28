import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[]
    },
    reducers:{
        setSigleCompany:(state,action) => {
            state.singleCompany = action.payload
        },
        setAllCompany:(state,action) => {
            state.companies = action.payload
        },
    },
  
})

export const {setSigleCompany,setAllCompany} = companySlice.actions
export default companySlice.reducer