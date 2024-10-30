import { createSlice } from "@reduxjs/toolkit";

const adminJobsSlice = createSlice({
    name:"adminJobs",
    initialState:{
        allAdminJobs:[],
        searchJobBytext:"",
    },
    reducers:{
        setallAdminJobs:(state,action)=>{
            state.allAdminJobs = action.payload
        },
        setSearchJobBytext:(state,action)=>{
            state.searchJobBytext = action.payload
        },
    },
  
})

export const {setallAdminJobs,setSearchJobBytext} = adminJobsSlice.actions
export default adminJobsSlice.reducer