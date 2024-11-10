import React, { useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const handleSignUp = () => {
    // Handle signup logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Registration Number:", registrationNumber);
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
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <TextField
                label="Registration Number"
                variant="outlined"
                margin="normal"
                fullWidth
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
