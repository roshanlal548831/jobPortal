import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null
    },
    reducers:{
        setSigleCompany:(state,action) => {
            state.singleCompany = action.payload
        }
    },
  
})

export const {setSigleCompany} = companySlice.actions
export default companySlice.reducer