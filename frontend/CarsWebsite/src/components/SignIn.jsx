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
const [error, setError] = useState({});
const [successMessage, setSuccessMessage] = useState("")

const loginButton=()=>{
  console.log("Login button clicked")
  const newError = {};

  if (!email) newError.email = "Email is required.";
  if (!password) newError.password = "Password is required.";

  
  if (Object.keys(newError).length) {
    setError(newError);
    return;
  }

  setError({});








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
  setSuccessMessage("Login successful! Redirecting to Homepage...");
  setTimeout(() => navgite("/"), 2000); 
  

}).catch((err)=>{
  console.log(err)
  setError({ api: "Login failed. Please try again." });
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
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  error={!!error.email}
                  helperText={error.email}
                />
           <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  error={!!error.password}
                  helperText={error.password}
                />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={loginButton}
              
            >
              Login
            </Button>
            {successMessage && (
                  <Typography variant="body2" color="green" style={{ marginTop: '10px' }}>
                    {successMessage}
                  </Typography>
                )}
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