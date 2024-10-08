import React, { useContext ,useState} from 'react'
import { registerContext } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}from 'mdb-react-ui-kit'

const SignIn = () => {
const navgite=useNavigate()
const {settoken , setloggedin}=useContext(registerContext)
const [password , setpassword]= useState("")
const [email , setemail]= useState("")

const loginButton=()=>{
setpassword(password)
setemail(email)

const body={
  email:email , 
  password: password
}
axios.post("http://localhost:5000/users/login", body ,).then((result)=>{
  console.log(result)
  const token =result.data.token
  localStorage.setItem("token",token)
  settoken(token)
  setloggedin(true)
  navgite("/")


}).catch((err)=>{
  console.log(err.response.data.message)
})}

  return (
     <div>
      <h3>SignIn</h3>
      <input placeholder='Your Email' onChange={(e)=>{ setemail(e.target.value) }}></input>
      <input placeholder='Your Password' onChange={(e)=>{ setpassword(e.target.value) }}></input>
      <button onClick={loginButton}>Login</button>
      <p>Dont have an account?</p>
      <button onClick={()=>{
        navgite("/Register")
      }}>Create account</button>
    </div> 
   
  )
}

export default SignIn