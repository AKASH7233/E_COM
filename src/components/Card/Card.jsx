import React from 'react'
import img from '../../assets/product_1.png'
function Card(props) {
  return (
    <div className=' w-72 px-2 pt-2'>
        <img src={props.image} alt="" />
        <p className='text-lg mt-4 font-bold '>{props.name}</p>
        <div className="flex gap-x-4 items-center">
        <h2 className='text-2xl font-bold'>${props.new_price}</h2>
        <h2 className='line-through text-2xl text-gray-500'>${props.old_price}</h2>
        </div>
    </div>
  )
}

export default Card