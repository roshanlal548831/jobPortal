import React from 'react'
import Navbar from './shard/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <CategoryCarousel/>
     {/* <LetestJobs/>
     <Footer/> */}
    </div>
  )
}

export default Home
