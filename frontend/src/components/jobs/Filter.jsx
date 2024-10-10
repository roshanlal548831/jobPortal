import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { data } from 'autoprefixer'

const filterData = [
  {
     filterType: "Location",
     array:["Delhi NCR","Bangalore","Poone","Mumbai"]
  },
  {
     filterType: "Industry",
     array:["Frontend developer","backend developer","Fullstack developer"]
  },
  {
     filterType: "Salry",
     array:["0-40K","42-11laks","1laks to 5lakh"]
  },
]

const Filter = () => {
  return (
    <div>
       <h1 className='font-bold text-lg'>Filter Jobs</h1>
       <hr className='mt-3'/>
       <RadioGroup defaultValue="comfortable">
        {
          filterData.map((data , i)=> (
            <div key={i}>
              <h1>{data.filterType}</h1>
              {
                 data.array.map((item,i)=> {
                  return (
                    <div key={i} className='flex items-center space-x-2 my-2'>
                        <RadioGroupItem value={item}/>
                        <Label>{item}</Label>
                    </div>
                  )
                 })
              }
            </div>
          ))
        }
    </RadioGroup>
    </div>
  )
}

export default Filter
