import React, { useState , createContext ,useEffect}  from 'react' 
import './App.css'
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom"
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
import SellerMessages from './components/Messages'
import adminPosts from './components/AdminPosts'
import UsersInfo from './components/UsersInfor'
import CheckUsersPosts from './components/CheckUsersPosts'
import CarsCategory from './components/CarsCategory'
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

const location=useLocation()
const adminPaths = ['/admin/signin', '/admin/dashbored', '/admin/createpost',"/UserPosts","/Userinfo"]




  return (
    <>
     
    <registerContext.Provider value={{token,settoken,loggedin,setloggedin,firstName,setfirstName1,posts,setposts}}>
    {!adminPaths.includes(location.pathname) && <Navbar />}
    <Routes>
    <Route path="/admin/signin" element={<AdminSignIn/>}/>
    <Route path="/admin/dashbored" element={<Adminroute element={<AdminDashbored />} />} />
    <Route path="/admin/createpost" element={<adminPosts/>}/>

    <Route path="/posts/:carName" element={<CarsCategory/>}/>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/Shopping" element={<CarsforSale/>}/>
    <Route path="/New-cars" element={<NewCars/>}/>
    <Route path="/News" element={<NewsAndVideos/>}/>
    <Route path="/sell-your-car" element={<SellYourCar/>}/>
    <Route path="/Signin" element={<SignIn/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Car-Details/:id" element={<CarDetails posts={posts}/>}/>
    <Route path="/messages" element={<SellerMessages/>}/>
    <Route path="/Userinfo" element={<UsersInfo/>}/>
    <Route path="/UserPosts" element={<CheckUsersPosts/>}/>
    </Routes>
    </registerContext.Provider>
    </>
    
  )
}

export default App

