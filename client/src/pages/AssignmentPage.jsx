import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Paper,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import Navbar from "./Navbar"; // Adjust the import path as necessary

export default function AssignmentPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      setUploading(true);
      setProgress(0);
      console.log("File uploaded:", file.name);
      // Simulate an upload process
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setUploading(false);
            console.log("Upload complete");
            return 100;
          }
          return prevProgress + 10;
        });
      }, 300); // Simulate progress increment every 300ms
    } else {
      console.log("No file selected");
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Paper
            elevation={3}
            sx={{ padding: 4, width: "100%", backgroundColor: "#f5f5f5" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ color: "#1976d2" }}
            >
              Upload Assignment
            </Typography>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <TextField
                type="file"
                inputProps={{ accept: "application/pdf" }}
                onChange={handleFileChange}
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "#ffffff" }}
              />
              <Box sx={{ position: "relative", width: "100%" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth
                  startIcon={<CloudUpload />}
                  sx={{
                    padding: 1.5,
                    background: `linear-gradient(to right, red ${progress}%, green ${progress}%)`,
                    "&:hover": {
                      background: `linear-gradient(to right, red ${progress}%, green ${progress}%)`,
                    },
                  }}
                  disabled={uploading}
                >
                  {uploading ? `Uploading... ${progress}%` : "Upload"}
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
