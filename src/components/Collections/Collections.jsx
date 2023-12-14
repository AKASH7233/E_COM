import React from 'react'
import Card from '../Card/Card'
import new_collections from '../../assets/new_collections'
function Collections() {
  return (
    <div className='mt-20 px-36'>
    <h2 className='text-4xl font-semibold text-center'>New Collections</h2>
    <div className=" ml-[37%] mt-2 rounded-md w-80 h-2 bg-black"></div>
    <div className='mt-12 flex flex-shrink-0 flex-wrap gap-5'>
    {new_collections.map((item,i)=>{
        return <Card key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
    })}
    </div>
</div>
  )
}

export default Collections