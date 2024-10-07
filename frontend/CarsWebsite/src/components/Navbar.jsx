import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerContext } from '../App'
import { useContext } from 'react'


const Navbar = () => {
const {token ,firstName }=useContext(registerContext)


  return (
    <>
    <div className='Navbar'>
      {token ? (<><h2><Link to={"/Shopping"}>Cars for sale</Link></h2>
         <h2><Link to={"/New-cars"}>New Cars</Link></h2>
         <h2><Link to={"/News"}>News and videos</Link></h2>
         <h2><Link to={"/sell-your-car"}>Sell your car</Link></h2>
         <h2>Hello {firstName}</h2> </>):
         (
         <><h2><Link to={"/Shopping"}>Cars for sale</Link></h2>
         <h2><Link to={"/New-cars"}>New Cars</Link></h2>
         <h2><Link to={"/News"}>News and videos</Link></h2>
         <h2><Link to={"/sell-your-car"}>Sell your car</Link></h2>
         <h2><Link to={"/Signin"}>Sign in</Link></h2> </>
        )}
        
    </div>
    </>
  )
}

export default Navbar