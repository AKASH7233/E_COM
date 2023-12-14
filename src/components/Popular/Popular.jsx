import React from 'react'
import data_product from '../../assets/data'
import Card from '../Card/Card'

function Popular() {
    
  return (
    <div className='mt-20 px-36'>
        <h2 className='text-4xl font-semibold text-center'>Popular in Women</h2>
        <div className=" ml-[37%] mt-2 rounded-md w-80 h-2 bg-black"></div>
        <div className='mt-12 gap-x-4 flex'>
        {data_product.map((item,i)=>{
            return <Card key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
        })}
        </div>
    </div>
  )
}

export default Popular