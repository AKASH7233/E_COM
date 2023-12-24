import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
function Breadcrum(props) {
    const {product} = props;
    
  return (
    <div className='flex items-center py-4 px-36'>
      <Link to='/'>HOME</Link>
      <MdOutlineKeyboardArrowRight className='text-xl' />
      <Link to='/'>SHOP</Link>
      <MdOutlineKeyboardArrowRight className='text-xl'/>
      {product.category}
      <MdOutlineKeyboardArrowRight className='text-xl' />
      {product.name}
    </div>
  )
}

export default Breadcrum