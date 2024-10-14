import React, { useContext ,useState} from 'react'
import { registerContext } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Container, Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material'
import carimage from "../assets/loginwallpaper.jpg"


const AdminSignIn = () => {
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
  
  navgite("/admin/dashbored")
 

}).catch((err)=>{
  console.log(err)
})}

  return (
 
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
              label="Admin Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              label="Admin Password"
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
          
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  </Container>
   
  )
}

export default AdminSignIn