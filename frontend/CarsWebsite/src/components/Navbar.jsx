import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerContext } from '../App'
import { useContext } from 'react'
import SignIn from './SignIn'

const Navbar = () => {
const {token ,firstName1,settoken,setloggedin }=useContext(registerContext)
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
      <img id="logo" src="./src/assets/homelogo.jpg"></img>
       <h4><Link to={"/Shopping"}>Cars for sale</Link></h4>
         <h4><Link to={"/New-cars"}>New Cars</Link></h4>
         <h4><Link to={"/News"}>News and videos</Link></h4>
         <h4><Link to={"/sell-your-car"}>Sell your car</Link></h4>
         {token ? (<><h2>Hello {firstName1}</h2>  
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