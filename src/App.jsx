// import {
//   Typography,
//   AppBar,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   CssBaseline,
//   Grid,
//   Toolbar,
//   Container,
//   Button,
// } from "@mui/material";
import React from "react";
import {
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
  TextField,
  Badge,
  Avatar,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";

import Post from "./components/Post";
import Navbar from "./components/Navbar";
import SideNavigation from "./components/SideNavigation";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Pages from "./components/Pages";
function App() {
  return (
    <>
      {/* <PhotoAlbum /> */}
      <CssBaseline />
      <Navbar />
      <main className="p-4 items-center gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <SideNavigation />
          <Home />
          <Aside online={10} />
        </div>
      </main>
    </>
  );
}
export default App;
