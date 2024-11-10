import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Navbar from "./Navbar"; // Adjust the import path as necessary
import {
  Tv,
  SportsEsports,
  Toys,
  Face,
  VideogameAsset,
  Movie,
} from "@mui/icons-material";

export default function Features() {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleFeatureChange = (event, newFeatures) => {
    setSelectedFeatures(newFeatures);
  };

  const handleSubmit = () => {
    console.log("Selected Features:", selectedFeatures);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#FF6347",
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
            }}
          >
            Select Your Features
          </Typography>
          <Grid container spacing={2}>
            {[
              {
                value: "spongeBob",
                label: "Sponge Bob",
                icon: <Tv fontSize="large" />,
                color: "#FFD700", // Light yellow
              },
              {
                value: "barbie",
                label: "Barbie",
                icon: <Face fontSize="large" />,
                color: "#FF69B4", // Hot pink
              },
              {
                value: "batman",
                label: "Batman",
                icon: <VideogameAsset fontSize="large" />,
                color: "#1E90FF", // Dodger blue
              },
              {
                value: "cinderella",
                label: "Cinderella",
                icon: <Movie fontSize="large" />,
                color: "#FFB6C1", // Light pink
              },
              {
                value: "fortnite",
                label: "Fortnite",
                icon: <SportsEsports fontSize="large" />,
                color: "#32CD32", // Lime green
              },
              {
                value: "minecraft",
                label: "Minecraft",
                icon: <Toys fontSize="large" />,
                color: "#8A2BE2", // Blue violet
              },
            ].map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.value}>
                <Card
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    backgroundColor: selectedFeatures.includes(feature.value)
                      ? feature.color
                      : "#f0f0f0",
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 140,
                      transition: "transform 0.3s",
                      backgroundColor: selectedFeatures.includes(feature.value)
                        ? feature.color
                        : "#f0f0f0",
                    }}
                  >
                    {React.cloneElement(feature.icon, {
                      color: selectedFeatures.includes(feature.value)
                        ? "primary"
                        : "inherit",
                    })}
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        fontFamily: "'Comic Sans MS', cursive, sans-serif",
                      }}
                    >
                      {feature.label}
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          handleFeatureChange(null, [
                            ...selectedFeatures,
                            feature.value,
                          ])
                        }
                        disabled={selectedFeatures.includes(feature.value)}
                        sx={{
                          backgroundColor: selectedFeatures.includes(
                            feature.value
                          )
                            ? feature.color
                            : "#1976d2",
                          "&:hover": {
                            backgroundColor: selectedFeatures.includes(
                              feature.value
                            )
                              ? feature.color
                              : "#1565c0",
                          },
                          borderRadius: 2,
                          fontFamily: "'Comic Sans MS', cursive, sans-serif",
                        }}
                      >
                        {selectedFeatures.includes(feature.value)
                          ? "Selected"
                          : "Select"}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              backgroundColor: "#FF6347",
              "&:hover": {
                backgroundColor: "#FF4500",
              },
              borderRadius: 2,
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
}
