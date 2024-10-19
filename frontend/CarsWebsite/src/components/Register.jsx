import React , {useContext, useState} from 'react'
import axios from "axios"
import { registerContext } from '../App'
import { useNavigate } from 'react-router-dom'
import carimage from "../assets/registerwallpaper.jpg"

import { Container, Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material'





const Register = () => {
  const { setfirstName1 } = useContext(registerContext);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const RegisterButton = () => {
    const newError = {};

   
    if (!firstName) newError.firstName = "First Name is required.";
    if (!lastName) newError.lastName = "Last Name is required.";
    if (!age) newError.age = "Age is required.";
    if (!email) newError.email = "Email is required.";
    if (!password) newError.password = "Password is required.";

    
    if (Object.keys(newError).length) {
      setError(newError);
      return;
    }

    setError({});

    const body = {
      firstName,
      lastName,
      age,
      password,
      email
    };

    axios.post("http://localhost:5000/users/register", body)
      .then((result) => {
        if (result.status === 201) {
          setfirstName1(firstName);
          setSuccessMessage("Registration successful! Redirecting to login...");
          setTimeout(() => navigate("/Signin"), 2000); 
        }
      })
      .catch((err) => {
        console.log(err);
        setError({ api: "Registration failed. Please try again." });
      });
  };

  return (
    <>
      <Container component="main" maxWidth="md" className="register-container">
        <Card className="register-card">
          <Grid container>
            <Grid item xs={12} sm={6} className="image-section">
              <img src={carimage} alt="Car" className="car-image" />
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
                  error={!!error.firstName}
                  helperText={error.firstName}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  error={!!error.lastName}
                  helperText={error.lastName}
                />
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                  error={!!error.age}
                  helperText={error.age}
                />
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
                  onClick={RegisterButton}
                >
                  Register
                </Button>

               
                {successMessage && (
                  <Typography variant="body2" color="green" style={{ marginTop: '10px' }}>
                    {successMessage}
                  </Typography>
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default Register;
