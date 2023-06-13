import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="./countrieslist">Countries List</NavLink>
            <NavLink to="./countriesdata">Countries Data</NavLink>
            <NavLink to = "./map">Map</NavLink>

        </div>
    )
}

export default NavBar;
