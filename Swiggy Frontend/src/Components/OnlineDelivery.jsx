import React, { useEffect, useState } from 'react'
import Card from './Card'
 import { FaArrowLeftLong, FaArrowRightLong} from 'react-icons/fa6';

const OnlineDelivery = () => {
     const [Data, setData] = useState([]);
    
        const fetchTopRest = async () => {
            const response = await fetch('http://localhost:5000/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
            console.log(apiData);
        }

        useEffect(() => {
              fetchTopRest();   
            }, []);
            
  return (
    <div className='max-w-300 mx-auto'>
            <div className='flex my-3 items-center justify-between'>
              <div className='text-sm mt-1 text-gray-500 font-bold text-[20px]'>Deliver at Home</div>
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    Data.map(
                        (d,i) => {
                            return (<Card { ...d } key={i} />)
                        }
                    )
                }
            </div>
             <hr className='my-6 border-0.5 border-gray-400'/>
            </div>

  
  )
}

export default OnlineDelivery
