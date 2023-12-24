import React from 'react'
import { Link } from 'react-router-dom'
function Lists(props) {
  return (
    <Link className='hover:text-black text-gray-400 font-semibold' to=''>{props.name}</Link>
  )
}

export default Lists