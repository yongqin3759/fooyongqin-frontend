import React from 'react'
import { NavLink } from './NavLink'


export const MenuOverlay = ({links, toggleNavbar}) => {
  return (
    <ul className="flex flex-col py-4 items-center" >
      {links.map((link, index) => (
        <li key={index} onClick={toggleNavbar}>
          <NavLink {...link}/>

        </li>
      ))}
    </ul>
  )
}
