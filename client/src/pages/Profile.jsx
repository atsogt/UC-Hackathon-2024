import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Avatar,
  Grid,
  Button,
} from "@mui/material";
import Navbar from "./Navbar"; // Adjust the import path as necessary

const profileData = {
  name: "John Doe",
  role: "Student",
  email: "john.doe@example.com",
  cumulativeScore: 88,
};

const features = [
  "Sponge Bob",
  "Barbie",
  "Batman",
  "Cinderella",
  "Fortnite",
  "Minecraft",
  "Barbie",
];

const preSelectedFeatures = ["Sponge Bob", "Batman", "Fortnite"];

export default function Profile() {
  const [selectedFeatures, setSelectedFeatures] = useState(preSelectedFeatures);

  const handleFeatureClick = (feature) => {
    setSelectedFeatures((prevSelectedFeatures) =>
      prevSelectedFeatures.includes(feature)
        ? prevSelectedFeatures.filter((f) => f !== feature)
        : [...prevSelectedFeatures, feature]
    );
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar sx={{ bgcolor: "#1976d2", width: 100, height: 100 }}>
                  {profileData.name.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                >
                  <Typography variant="h4" gutterBottom>
                    {profileData.name}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Role: {profileData.role}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Email: {profileData.email}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Cumulative Score: {profileData.cumulativeScore}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Typography variant="h5" gutterBottom align="center">
                Features
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {features.map((feature) => (
                  <Grid item key={feature}>
                    <Button
                      variant="contained"
                      color={
                        selectedFeatures.includes(feature)
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleFeatureClick(feature)}
                      sx={{
                        minWidth: 120,
                        minHeight: 50,
                        fontSize: "1rem",
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      {feature}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
