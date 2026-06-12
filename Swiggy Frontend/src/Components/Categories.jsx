import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
     const response = await fetch('http://swiggy-production-d608.up.railway.app/...')
     const data = await response.json();
      setCategories(data);
  }

  useEffect(
    () => {
      fetchCategories();
    },[]
  )

  const nextSlide = () => {
      console.log(categories.length);
      if (categories.length-8 == slide) return; 
      setSlide(slide + 3);
  }

  const prevSlide = () => {
    if (slide == 0) return;
      setSlide(slide - 3);
  }
  return (
    <div className='max-w-300 mx-auto'>
    <div className='flex my-3 items-center justify-between'>
      <div className='text-sm mt-1 text-gray-500 font-bold text-[20px]'>What's your favorite cuisine?</div>
      <div className='flex'>
        <div className='flex justify-center items-center cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeftLong /></div>
        <div className='flex justify-center items-center cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRightLong /></div>
      </div>
    </div>
    <div className='flex overflow-hidden'>
      {
        categories.map(
          (cat, index) => {
            return (
              <div style={{
                transform: `translateX(-${slide * 100}%)`
              }} key={index} className='w-37 shrink-0 duration-500'>
          <img src={"http://swiggy-production-d608.up.railway.app/..." + cat.image} alt="" />
              </div>
            )
          }
        )
      }
    </div>
    <hr className='my-6 border-0.5 border-gray-400'/>
    </div>
  )
}

export default Categories
