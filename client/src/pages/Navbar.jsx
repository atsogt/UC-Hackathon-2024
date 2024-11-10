import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { AccountCircle, Menu, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState("spongeBob");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSideDrawerToggle = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };

  const drawer = (
    <List>
      <ListItem
        button
        component={Link}
        to="/viewassignment"
        onClick={handleDrawerToggle}
      >
        <ListItemText primary="Tasks" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/people"
        onClick={handleDrawerToggle}
      >
        <ListItemText primary="People" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/profile"
        onClick={handleDrawerToggle}
      >
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/assignment"
        onClick={handleDrawerToggle}
      >
        <ListItemText primary="Assignments" />
      </ListItem>
    </List>
  );

  const sideDrawer = (
    <Drawer
      anchor="left"
      open={sideDrawerOpen}
      onClose={handleSideDrawerToggle}
      onMouseLeave={handleSideDrawerToggle}
    >
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem
            button
            component={Link}
            to="/viewassignment"
            onClick={handleSideDrawerToggle}
          >
            <ListItemText primary="Tasks" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/people"
            onClick={handleSideDrawerToggle}
          >
            <ListItemText primary="People" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/profile"
            onClick={handleSideDrawerToggle}
          >
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/assignment"
            onClick={handleSideDrawerToggle}
          >
            <ListItemText primary="Assignments" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1E3A8A", // Navy blue color
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            backgroundColor: "#1E40AF", // Slightly lighter navy blue color
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Container maxWidth={false} sx={{ padding: 0, margin: 0 }}>
          <Toolbar sx={{ padding: 0, margin: 0 }}>
            <IconButton
              color="inherit"
              onMouseEnter={handleSideDrawerToggle}
              sx={{ mr: 2 }}
            >
              <ChevronRight />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              MyApp
            </Typography>
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <Menu />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/viewassignment"
                  sx={{
                    backgroundColor:
                      selectedFeature === "spongeBob" ? "#FFEB3B" : "inherit",
                    "&:hover": {
                      backgroundColor: "#FFEB3B",
                    },
                    borderRadius: 2,
                    fontFamily: "'Comic Sans MS', cursive, sans-serif",
                  }}
                  onClick={() => handleFeatureSelect("spongeBob")}
                >
                  Sponge Bob
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/people"
                  sx={{
                    backgroundColor:
                      selectedFeature === "people" ? "#FFEB3B" : "inherit",
                    "&:hover": {
                      backgroundColor: "#FFEB3B",
                    },
                    borderRadius: 2,
                    fontFamily: "'Comic Sans MS', cursive, sans-serif",
                  }}
                  onClick={() => handleFeatureSelect("people")}
                >
                  People
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/assignment"
                  sx={{
                    backgroundColor:
                      selectedFeature === "assignment" ? "#FFEB3B" : "inherit",
                    "&:hover": {
                      backgroundColor: "#FFEB3B",
                    },
                    borderRadius: 2,
                    fontFamily: "'Comic Sans MS', cursive, sans-serif",
                  }}
                  onClick={() => handleFeatureSelect("assignment")}
                >
                  Assignments
                </Button>
                <IconButton
                  color="inherit"
                  component={Link}
                  to="/profile"
                  sx={{
                    backgroundColor:
                      selectedFeature === "profile" ? "#FFEB3B" : "inherit",
                    "&:hover": {
                      backgroundColor: "#FFEB3B",
                    },
                    borderRadius: 2,
                  }}
                  onClick={() => handleFeatureSelect("profile")}
                >
                  <AccountCircle />
                </IconButton>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {sideDrawer}
    </>
  );
}
