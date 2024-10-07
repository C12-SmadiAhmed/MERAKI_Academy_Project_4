import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerContext } from '../App'
import { useContext } from 'react'
const Navbar = () => {
const {token ,firstName1,settoken,setloggedin }=useContext(registerContext)
const navagite=useNavigate()
console.log(firstName1)
const logOutButton=()=>{
  settoken(null)
  setloggedin(false)
  navagite("/")
}
  return (
    <>
    <div className='Navbar'>
      <img id="logo" src="./src/assets/Screenshot 2024-10-07 145102.png"></img>
       <h2><Link to={"/Shopping"}>Cars for sale</Link></h2>
         <h2><Link to={"/New-cars"}>New Cars</Link></h2>
         <h2><Link to={"/News"}>News and videos</Link></h2>
         <h2><Link to={"/sell-your-car"}>Sell your car</Link></h2>
         {token ? (<><h2>Hello {firstName1}</h2>  
         <button id="logout" onClick={logOutButton}>Logout</button></>):(
          <h2><Link to={"/Signin"}>Sign in</Link></h2> )
        }
        
    </div>
    </>
  )
}
export default Navbar