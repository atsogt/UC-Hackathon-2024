import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import Navbar from "./Navbar"; // Adjust the import path as necessary

const features = [
  "Sponge Bob",
  "Barbie",
  "Original",
  "Minecraft",
  "Batman",
  "Cinderella",
  "Fortnite",
];

export default function ViewAssignment() {
  const [selectedFeature, setSelectedFeature] = useState("");

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{
              mb: 4,
              color: "#FF69B4",
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
            }}
          >
            Select a Feature
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
            {features.map((feature) => (
              <Button
                key={feature}
                variant="contained"
                color="primary"
                onClick={() => handleFeatureSelect(feature)}
                sx={{
                  minWidth: 120,
                  minHeight: 50,
                  fontSize: "1rem",
                  transition: "transform 0.3s",
                  backgroundColor: "#87CEEB", // Sky blue
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#00BFFF", // Deep sky blue
                  },
                  borderRadius: 2,
                  fontFamily: "'Comic Sans MS', cursive, sans-serif",
                }}
              >
                {feature}
              </Button>
            ))}
          </Stack>
          {selectedFeature && (
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                width: "100%",
                mt: 4,
                backgroundColor: "#98FB98",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#FF69B4",
                  fontFamily: "'Comic Sans MS', cursive, sans-serif",
                }}
              >
                Selected Feature
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1976d2",
                    fontFamily: "'Comic Sans MS', cursive, sans-serif",
                  }}
                >
                  {selectedFeature}
                </Typography>
              </Box>
            </Paper>
          )}
        </Box>
      </Container>
    </>
  );
}
