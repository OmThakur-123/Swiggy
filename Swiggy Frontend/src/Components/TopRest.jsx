import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';

const TopRest = () => {
    const [slide, setSlide] = useState();
    const [Data, setData] = useState([]);

    const fetchTopRest = async () => {
        const response = await fetch('http://swiggy-production-d608.up.railway.app/...');
        const apiData = await response.json();
        setData(apiData);
        console.log(apiData);
    }

    useEffect(() => {
      fetchTopRest();   
    }, []);

     const nextSlide = () => {
      console.log(Data.length);
      if (slide >= Data.length - 5) return;
      setSlide(slide => slide + 2);
  }

  const prevSlide = () => {
     if (slide <= 0) return;

     setSlide(prev => prev - 2);
  }
    
  return (
     <div className='max-w-300 mx-auto '>
        <div className='flex my-3 items-center justify-between'>
          <div className='text-sm mt-1 text-gray-500 font-bold text-[20px]'>Top Restaurants in Your Area</div>
          <div className='flex'>
            <div className='flex justify-center items-center cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeftLong /></div>
            <div className='flex justify-center items-center cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRightLong /></div>
          </div>
        </div>
        <div className='flex gap-5 overflow-hidden  '>
          {
            Data.map(
              (d,i) => {
                return (<Card { ...d } key={i} />)
              }
            )
          }
          <Card />
        </div>
         <hr className='my-6 border-0.5 border-gray-400'/>
        </div>
        
  )
}

export default TopRest
