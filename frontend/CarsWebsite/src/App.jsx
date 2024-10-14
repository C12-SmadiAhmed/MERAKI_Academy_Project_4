import React, { useState , createContext ,useEffect}  from 'react' 
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import CarsforSale from './components/CarsForSale'
import NewCars from './components/NewCars'
import NewsAndVideos from './components/NewsAndVideos'
import SellYourCar from './components/SellYourCar'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Register from './components/Register'
import CarDetails from './components/Cardetailes'
import AdminSignIn from './components/Adminlogin'
import AdminDashbored from './components/AdminDashbored'
import Adminroute from './components/Adminroute'

export const registerContext=createContext()


function App() {
  const [token, settoken] = useState(localStorage.getItem('token')|| '')
const [loggedin, setloggedin] = useState(false)
const [firstName,setfirstName1]= useState("")

const [posts, setposts] = useState([])
//const [currentImageNumber, setcurrentImageNumber] = useState([])
useEffect(()=>{
  axios.get(`http://localhost:5000/posts`).then((res)=>{
    setposts(res.data.post)
   
  
  }).catch((err)=>{
    //seterror1(err.response.data.message)
    console.log(err)
    
  
  
})},[]) 







  return (
    <>
    <registerContext.Provider value={{token,settoken,loggedin,setloggedin,firstName,setfirstName1,posts,setposts}}>
    <Routes>
    <Route path="/admin/signin" element={<AdminSignIn/>}/>
    <Route path="/admin/dashbored" element={<Adminroute element={<AdminDashbored />} />} />

    <Route path="/" element={<HomePage/>}/>
    <Route path="/Shopping" element={<CarsforSale/>}/>
    <Route path="/New-cars" element={<NewCars/>}/>
    <Route path="/News" element={<NewsAndVideos/>}/>
    <Route path="/sell-your-car" element={<SellYourCar/>}/>
    <Route path="/Signin" element={<SignIn/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Car-Details/:id" element={<CarDetails posts={posts}/>}/>
    </Routes>
    </registerContext.Provider>
    </>
    
  )
}

export default App

