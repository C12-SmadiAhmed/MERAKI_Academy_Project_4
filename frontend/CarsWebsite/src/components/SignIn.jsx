import React, { useContext ,useState} from 'react'
import { registerContext } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Container, Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material'
import carimage from "../assets/loginwallpaper.jpg"


const SignIn = ({ isOpen, onClose }) => {
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
  onClose()

}).catch((err)=>{
  console.log(err.response.data.message)
})}

  return (
  /*     <div>
      <h3>SignIn</h3>
      <input placeholder='Your Email' onChange={(e)=>{ setemail(e.target.value) }}></input>
      <input placeholder='Your Password' onChange={(e)=>{ setpassword(e.target.value) }}></input>
      <button onClick={loginButton}>Login</button>
      <p>Dont have an account?</p>
      <button onClick={()=>{
        navgite("/Register")
      }}>Create account</button>
    </div> */  
    <Container component="main" maxWidth="md" className="login-container">
    <Card className="login-card"> 
      <Grid container>
        <Grid item xs={12} sm={6} className="image-section">
          <img src={carimage} alt="Car" className="car-image" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Login to Your Account
            </Typography>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={loginButton}
              
            >
              Login
            </Button>
            <p>Dont have an account?</p>
      <Button onClick={()=>{
        navgite("/Register")
      }}>Create account</Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  </Container>
   
  )
}

export default SignIn