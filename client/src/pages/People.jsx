import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Paper,
} from "@mui/material";
import {
  Person,
  PersonOutline,
  PersonPin,
  PersonAdd,
  PersonRemove,
  Face,
  AccountCircle,
} from "@mui/icons-material";
import Navbar from "./Navbar"; // Adjust the import path as necessary

const people = [
  { name: "John Doe", score: 85, progress: "Completed", avatar: <Person /> },
  {
    name: "Vijay",
    score: 90,
    progress: "Completed",
    avatar: <PersonOutline />,
  },
  { name: "Lewis", score: 75, progress: "Inprogress", avatar: <PersonPin /> },
  { name: "Sambhav", score: 88, progress: "Completed", avatar: <PersonAdd /> },
  {
    name: "Anand",
    score: 92,
    progress: "Inprogress",
    avatar: <PersonRemove />,
  },
  { name: "Taylor Swift", score: 80, progress: "Inprogress", avatar: <Face /> },
  {
    name: "Jane Doe",
    score: 95,
    progress: "Completed",
    avatar: <AccountCircle />,
  },
];

export default function People() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center" mt={5}>
          People
        </Typography>
        <Paper elevation={3} sx={{ width: "100%", padding: 3 }}>
          <List>
            {people.map((person) => (
              <ListItem
                key={person.name}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  backgroundColor: "#f0f0f0",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  width: "100%",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#e0f7fa",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1976d2", color: "#fff" }}>
                    {person.avatar}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={person.name}
                  secondary={`Score: ${person.score}`}
                  sx={{ flex: 1, color: "#1976d2" }}
                />
                <Chip
                  label={person.progress}
                  color={
                    person.progress === "Completed" ? "success" : "warning"
                  }
                  sx={{
                    backgroundColor:
                      person.progress === "Completed" ? "#4caf50" : "#ff9800",
                    color: "#fff",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
}
