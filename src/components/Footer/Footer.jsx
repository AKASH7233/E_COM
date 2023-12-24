import React from 'react'
import Lists from './lists'
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
function Footer() {
  const list = [
    {
      id:1,
      name:'Company'
    },
    {
      id:2,
      name:'Products'
    },
    {
      id:3,
      name:'About'
    },
    {
      id:4,
      name:'Offices'
    },
    {
      id:5,
      name:'Contact'
    }
  ]

  return (
    <>
      <div className='px-36 pt-16'>
      <h2 className='text-3xl text-center font-semibold'>Shoppers</h2>
      <div className='w-40 h-2 ml-[44%] mt-2 rounded-full bg-black'></div>
        <div className='flex px-32 text-xl font-medium justify-around mt-12 '>
          {list.map((li)=>(
            <Lists key={li.id} name={li.name}/>
          ))}  
        </div>  
        <div className='flex text-4xl justify-center text-gray-600 gap-x-20 my-8'>
        <FaInstagram className={'cursor-pointer hover:text-black'}/>
        <FaWhatsapp className={'cursor-pointer hover:text-black'}/>
        <FaPinterest className={'cursor-pointer hover:text-black'}/>
        </div>
    </div>
    <h2 className='text-xl border border-t-[#ccc] py-2 font-semibold text-center'>
    Copyright @ 2023 - All Right Reserved
    </h2>
    </>
  )
}

export default Footer