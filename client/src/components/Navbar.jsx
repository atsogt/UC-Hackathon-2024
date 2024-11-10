
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UC Hackathon 2024
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Assignments</Button>
        <Button color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
}