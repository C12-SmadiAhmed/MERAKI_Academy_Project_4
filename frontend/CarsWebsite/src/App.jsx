import React, { useState , createContext }  from 'react' 
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import CarsforSale from './components/CarsForSale'
import NewCars from './components/NewCars'
import NewsAndVideos from './components/NewsAndVideos'
import SellYourCar from './components/SellYourCar'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Register from './components/Register'

export const registerContext=createContext()


function App() {
  const [token, settoken] = useState(localStorage.getItem('token')|| '')
const [loggedin, setloggedin] = useState(false)
const [firstName1,setfirstName1]= useState("")
  return (
    <>
    <registerContext.Provider value={{token,settoken,loggedin,setloggedin,firstName1,setfirstName1}}>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Shopping" element={<CarsforSale/>}/>
    <Route path="/New-cars" element={<NewCars/>}/>
    <Route path="/News" element={<NewsAndVideos/>}/>
    <Route path="/sell-your-car" element={<SellYourCar/>}/>
    <Route path="/Signin" element={<SignIn/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Register" element={<Register/>}/>
    </Routes>
    </registerContext.Provider>
    </>
    
  )
}

export default App

