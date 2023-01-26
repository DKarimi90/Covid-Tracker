import React from 'react'
import './LogIn.css'

function LogIn() {
    return (
       <div className='login--container'>
        <form id='login--form'>
            <h1>Login Here</h1>
            <div class="details-container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"/> Remember me   
            <button type="button" > Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>  
        </form>
       </div> 
       
    )
}

export default LogIn
