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
import PhotoAlbum from "./PhotoAlbum";
import { useState, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
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

import Post from "./Post";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      {/* <PhotoAlbum /> */}
      <CssBaseline />
      <Navbar />

      <main className="p-4 flex flex-col items-center gap-5">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </>
  );
}
export default App;
