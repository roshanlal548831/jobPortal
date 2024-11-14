import React, { useEffect } from 'react'
import Navbar from './shard/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import UseGetAllJobs from '@/hooks/UseGetAllJobs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchQuiry } from '@/redux/job/jobSlice'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  UseGetAllJobs();
  
  const {user} = useSelector(store => store.auth);

  const clearDispatch  = () => {
    dispatch(setSearchQuiry(""))
  };
  clearDispatch();

  useEffect(()=>{
     if(user?.userData?.role === "recruiter"){
      navigate("/admin/companies");
     };

  },[]);

  return (
    <div className='sm:ml-10 md:ml-0 sm:p-3 md:p-0'>
     <Navbar/>
     <HeroSection/>
     <CategoryCarousel/>
     <LatestJobs/>
     <Footer/>
    </div>
  )
}

export default Home
