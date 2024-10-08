import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category = [
    "Frontend developer",
    "Full stack developer",
    "Frontend developer",
    "Data scine developer"
]

const CategoryCarousel = () => {
  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
           <CarouselContent>
           {
              category.map((Item,i)=> {
                return (
                    
                    <CarouselItem className="md:basis-1/2 "><Button className="border rounded-3xl shadow-slate-300">{Item}</Button></CarouselItem>
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
