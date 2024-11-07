import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
       allJobs:[],
       singleJob:null,
       allAppliedJobs:[],
       searchQuiry:""
    },
    reducers:{
        setAuthJobs:(state,action) => {
            state.allJobs = action.payload
        },
        setSingleJob:(state,action)=>{
            state.singleJob = action.payload
        },
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs = action.payload
        },
        setSearchQuiry:(state,action)=>{
            state.searchQuiry = action.payload
        },
    },
  
})

export const {setAuthJobs,setSingleJob,setAllAppliedJobs,setSearchQuiry} = jobSlice.actions
export default jobSlice.reducer