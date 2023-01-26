import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div className='nav'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "./countriesList">Countries List</NavLink>
        <NavLink to = "./countryData">Country Data</NavLink>
        <NavLink to = "./map">Map</NavLink>
        <NavLink to = "./login">LogIn</NavLink>
        <NavLink to = "./logout">LogOut</NavLink>
        

    </div>
  )
}

export default NavBar; 