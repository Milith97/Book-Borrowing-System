import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import your image
import backgroundImage from '../assets/img/signin.jpg';

const defaultTheme = createTheme();

export default function SignIn() {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };
  // const axios = require('axios');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     axios.post('http://localhost:8085/api/v1/auth', JSON.stringify(formData), {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
      
  //     .then(response => {
  //       console.log('Response:', response.data);
  //       // Handle the response data here
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // Handle errors here
  //     });
  //   } catch (error) {
  //     console.error('Error occurred during login:', error);
  //   }
  // };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Full height of the viewport
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CssBaseline />
        <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', p: 4, borderRadius: 4, minWidth: 300 }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: 'auto' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}