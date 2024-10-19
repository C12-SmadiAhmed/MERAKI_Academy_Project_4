import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerContext } from '../App'
import { useContext } from 'react'
import SignIn from './SignIn'
import { LuUserCircle2 } from "react-icons/lu";
import { Menu, MenuItem, Button } from '@mui/material';


const Navbar = () => {
const {token ,firstName1,settoken,setloggedin }=useContext(registerContext)
const navagite=useNavigate()
const [dropdown, setdropdown] = useState(false);

const isMenuOpen = (event) => {
  setdropdown(event.currentTarget);
};

const isMenuClosed = () => {
  setdropdown(false);
};




const logOutButton=()=>{
  settoken(null)
  localStorage.clear()
  setloggedin(false)
  navagite("/")
}
  return (
    <>
    <div className='Navbar'>
      <img id="logo" src="./src/assets/homelogo.jpg" onClick={() => navagite("/")} alt="Logo" />
      <h4><Link to={"/Shopping"}>Cars for sale</Link></h4>
      <h4><Link to={"/New-cars"}>New Cars</Link></h4>
      <h4><Link to={"/News"}>News and videos</Link></h4>
      <h4><Link to={"/sell-your-car"}>Sell your car</Link></h4>
      {token ? (
        <>
          <h3>Welcome {firstName1}</h3>
          <Button
            onClick={isMenuOpen}
            endIcon={<LuUserCircle2 style={{ width: '30px', height: '20px' }} />}
          >
            Menu
          </Button>
          <Menu
            anchorEl={dropdown}
            open={Boolean(dropdown)}
            onClose={isMenuClosed}
          >
            <MenuItem onClick={() => { isMenuClosed(); navagite("/my-posts"); }}>My Posts</MenuItem>
            <MenuItem onClick={() => { isMenuClosed(); navagite("/messages"); }}>My Messages</MenuItem>
            <MenuItem onClick={logOutButton}>Log Out</MenuItem>
          </Menu>
        </>
      ) : (
        <h4>
          <Link to={"/Signin"}>
            Sign in<LuUserCircle2 style={{ marginLeft: '4px', width: '30px', height: '20px' }} />
          </Link>
        </h4>
      )}
    </div>
    </>
  )
}
export default Navbar