import React, { useEffect } from 'react'
import Navbar from './shard/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import UseGetAllJobs from '@/hooks/UseGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  UseGetAllJobs();

  const navigate = useNavigate();

  const {user} = useSelector(store => store.auth);

  useEffect(()=>{

     if(user?.userData?.role === "recruiter"){
      navigate("/admin/companies");
     };

  },[]);

  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <CategoryCarousel/>
     <LatestJobs/>
     <Footer/>
    </div>
  )
}

export default Home
