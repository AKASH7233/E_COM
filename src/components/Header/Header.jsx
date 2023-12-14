import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Navlinks from './Navlinks'
import cart from '../../assets/cart_icon.png'

function Header() {
    const nav = [
        'Men',
        'Women',
        'Kids',
    ]
  return (
    <div className='flex justify-between items-center px-36 py-4'>
        <Link to = '/'>
        <h2 className='text-3xl'>Shoppers</h2>
        </Link>
        <div className="flex gap-x-20">
            <NavLink to= '/' className={({isActive})=> ` text-2xl font-semibold hover:text-red-400 ${isActive ? 'text-red-400': 'text-black'}`}>Home</NavLink>
           {nav.map((d)=>(<Navlinks link={d}/>))}
        </div>
        <div className='flex items-center gap-x-8'>
        <Link to = '/login'>
         <button className=' px-4 border duration-300 hover:bg-red-400 text-xl font-semibold rounded-2xl py-1'>Login</button>
        </Link>
        <Link to= '/Store'>
            <img src={cart} alt="" />
        </Link>
        </div>
    </div>
  )
}

export default Header