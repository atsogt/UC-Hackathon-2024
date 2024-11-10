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
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" mt={5}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onClick={handleLogin}
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Typography variant="body2" mt={2}>
                Already a registered user?{" "}
                <Link href="/signup" variant="body2">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
