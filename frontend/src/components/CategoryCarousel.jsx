import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuiry } from '@/redux/job/jobSlice';

const category = [
    "Backend developer",
    "Full stack developer",
    "Data scine developer",
   
]

const CategoryCarousel = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobhandler = (quiry) => {
    console.log("this is quiry",quiry)
      dispatch(setSearchQuiry(quiry));
      navigate("/browse")

  }


  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
           <CarouselContent>
           {
              category.map((Item,i)=> {
                return (
                    
                    <CarouselItem key={i} className="md:basis-1/2 "><Button onClick={()=>searchJobhandler(Item)} className="border rounded-3xl shadow-slate-300">{Item}</Button></CarouselItem>
                )
              })
           }
           </CarouselContent>
          
           <CarouselPrevious className="border-none font-bold h-10"/>
           
           <CarouselNext className="border-none font-bold h-10"/>
       </Carousel>

    </div>
  )
}

export default CategoryCarousel
