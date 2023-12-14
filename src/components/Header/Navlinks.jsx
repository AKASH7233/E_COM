import React from 'react'
import { NavLink } from 'react-router-dom'
function Navlinks(props) {
  return (
    <div>
        <NavLink to = {props.link}
            className={({isActive})=> ` text-2xl font-semibold hover:text-red-400 ${isActive ? 'text-red-400': 'text-black'}`}>
                {props.link}
            </NavLink>
    </div>
  )
}

export default Navlinks