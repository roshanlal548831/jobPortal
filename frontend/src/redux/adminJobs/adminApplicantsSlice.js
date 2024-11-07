import { createSlice } from "@reduxjs/toolkit";

const adminApplicantsSlice = createSlice({
    name:"applicant",
    initialState:{
        allApplicants:[],
    },
    reducers:{
        setAllApplicants:(state,action)=>{
            state.allApplicants = action.payload
        },
       
    },
  
})

export const {setAllApplicants} = adminApplicantsSlice.actions
export default adminApplicantsSlice.reducer