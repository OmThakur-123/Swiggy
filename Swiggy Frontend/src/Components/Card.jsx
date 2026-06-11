import React from 'react'

const Card = (props) => {
  return (
    <div className='w-62.5 my-3 shrink-0 cursor-pointer'>
      <div className='group h-45 rounded-[15px] overflow-hidden relative'>
      <img className='group-hover:scale-110 transition-transform duration-300 w-full h-full' src={"http://localhost:5000/images/" + props.image} alt="" /> 
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] text-gray-200 font-bold tracking-tighter'>
          {props.offer} 
        </div>
      </div>
      <div  className='text-[15px] mt-1 text-gray-600 font-medium leading-tight'>
      <div>
        {props.title}
      </div>
      <div>
        {props.minTime}-{props.maxTime} mins
      </div>
      <div>
        {props.name}
        <br />
        {props.place}
      </div>
      </div>
    </div>
  )
}

export default Card
