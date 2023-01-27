import React from 'react'
import { NavLink } from 'react-router-dom'

function LogOut() {
    return (
        <div>
            <NavLink to='/'>Logout from this page</NavLink>
        </div>
    )
}

export default LogOut
