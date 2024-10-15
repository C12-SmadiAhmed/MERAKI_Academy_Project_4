import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerContext } from '../App'
import { useContext } from 'react'
import SignIn from './SignIn'

const Navbar = () => {
const {token ,firstName,settoken,setloggedin }=useContext(registerContext)
const navagite=useNavigate()


const logOutButton=()=>{
  settoken(null)
  localStorage.clear()
  setloggedin(false)
  navagite("/")
}
  return (
    <>
    <div className='Navbar'>
      <img id="logo" src="./src/assets/homelogo.jpg" onClick={()=>{
        navagite("/")
      }}></img>
       <h4><Link to={"/Shopping"}>Cars for sale</Link></h4>
         <h4><Link to={"/New-cars"}>New Cars</Link></h4>
         <h4><Link to={"/News"}>News and videos</Link></h4>
         <h4><Link to={"/sell-your-car"}>Sell your car</Link></h4>
         {token ? (<><h3>Welcome {firstName}</h3>  
         <button id="logout" onClick={logOutButton}>Logout</button></>):(
          <>
          <h4><Link to={"/Signin"}>Sign in</Link></h4> 
          </>
        )}
        
    </div>
    </>
  )
}
export default Navbar