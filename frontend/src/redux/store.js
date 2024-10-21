import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import jobSlice from "./job/jobSlice"
const store = configureStore({
    reducer:{
       auth:authSlice,
       job:jobSlice
    }
})

export default store