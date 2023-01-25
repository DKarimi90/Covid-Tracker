import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "./countriesList">Countries List</NavLink>
        <NavLink to = "./login">LogIn</NavLink>
        <NavLink to = "./logout">LogOut</NavLink>
        <NavLink to = "./map">Map</NavLink>
    </div>
  )
}
export default NavBar;