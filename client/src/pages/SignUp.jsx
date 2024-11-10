import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Link,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function SignUp() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [role, setRole] = useState("");
  // const [registrationNumber, setRegistrationNumber] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({name: '', email: '', password: '', isAdmin: true, interests: []})
  const [role, setRole] = useState('teacher')
  // const [formData, setFormData] = useState({name: 'Anad', email: 'atsogt@gmail.com', password: 'kjnasdeflkjas', isAdmin: true, interests: []});


  const {name, email, password, isAdmin, interests} = user
  const handleSignUp = async (e) => {
    e.preventDefault();

    if(role === 'student') {
      // console.log('student')
      user.isAdmin = false;
    }else {
      // console.log('teacher')
      user.isAdmin = true;
    }
    console.log(user);

    try {
      const response = await fetch('http://localhost:3001/users/register',
 {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),

      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      if(data.message === 'Registration successful' && user.isAdmin) {
        navigate('/assignment')
      }else if (data.message === 'Registration successful' && !user.isAdmin) {
        navigate(`/features/${data.message.userId}`)
      }

      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (e.g., display error message to the user)
    }
    // // Handle signup logic here
    // console.log(user)
    // try {
    //   const response = await fetch('http://localhost:3001/users/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({name, email, password, isAdmin, interests}),
    //   });
    //   console.log(response.json());
    // } catch (error) {
    //   console.error('Registration error:', error);
    // }
    // try {
      // const response = await fetch('http://localhost:3001/users/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({user}),
      // });
  
    //   if (!response.ok) {
    //     throw new Error('Registration failed');
    //   }
  
    //   const data = await response.json();
    //   console.log('Registration successful:', data);
     
    // } catch (error) {
    //   console.error('Registration error:', error);
    // }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" mt={5}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom>
                Sign Up
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
                value={name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              {/* <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /> */}
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel>Role</InputLabel>
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  label="Role"
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                </Select>
              </FormControl>
              {/* <TextField
                label="Registration Number"
                variant="outlined"
                margin="normal"
                fullWidth
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              /> */}
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                fullWidth
                sx={{ mt: 2 }}
              >
                Sign Up
              </Button>
              <Typography variant="body2" mt={2}>
                Already have an account?{" "}
                <Link href="/login" variant="body2">
                  Login
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
