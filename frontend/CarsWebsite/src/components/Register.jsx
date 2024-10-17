import React , {useContext, useState} from 'react'
import axios from "axios"
import { registerContext } from '../App'
import { useNavigate } from 'react-router-dom'
import carimage from "../assets/registerwallpaper.jpg"

import { Container, Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material'





const Register = () => {
  const {setfirstName1}=useContext(registerContext)
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [age , setage]= useState("")
const [password , setpassword]= useState("")
const [email , setemail]= useState("")
const navagite=useNavigate()
const RegisterButton=()=>{
setfirstName(firstName)
setlastName(lastName)
setage(age)
setpassword(password)
setemail(email)
if (firstName&&lastName&&age&&password&&email){
  
}

console.log(firstName)
const body={
    firstName:firstName , 
    lastName:lastName , 
    age : age , 
    password: password , 
    email : email
}
console.log(body)
axios.post("http://localhost:5000/users/register", body ,).then((result)=>{
    console.log(result)
    console.log(result.status)
    if (result.status===201){
      navagite("/Signin")
    setfirstName1(firstName)
    console.log(firstName)
  
  };
}).catch((err)=>{
    console.log(err)
})
}
  return (
    <>
 {/*    <h3>Register</h3>
    <div>
        <input id="firstName"  placeholder="First Name" onChange={(e)=>{ setfirstName1(e.target.value )}}></input>
        <input id="lastname"  placeholder="Last Name" onChange={(e)=>{ setlastName(e.target.value )}}></input>
        <input id="age"  placeholder="Age"onChange={(e)=>{ setage(e.target.value )}}></input>
        <input id="password"  placeholder="Password" onChange={(e)=>{ setpassword(e.target.value )}}></input>
        <input id="email" placeholder="Email" onChange={(e)=>{ setemail(e.target.value )}}></input>
        <button onClick={RegisterButton} >Register</button>
    </div> */}
     <Container component="main" maxWidth="md" className="register-container">
    <Card className="register-card"> 
      <Grid container>
        <Grid item xs={12} sm={6} className="image-section">
          <img  src={carimage} alt="Car" className="car-image" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Create your account
            </Typography>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
    
              fullWidth
              margin="normal"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <TextField
              label="Age"
              variant="outlined"
    
              fullWidth
              margin="normal"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
           
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
              onClick={RegisterButton}
              
            >
              Register
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  </Container>
    </>
  )
}
export default Register