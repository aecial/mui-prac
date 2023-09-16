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
} from "@mui/material";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";

import Badges from "./Badges";
function App() {
  return (
    <>
      {/* <PhotoAlbum /> */}
      <CssBaseline />
      <AppBar className="h-20" position="relative">
        <Toolbar className="flex justify-between items-center p-4">
          <div className="flex items-center justify-center">
            <Diversity2OutlinedIcon className="mr-4" fontSize="large" />
            <Typography variant="h6">Peysbuk</Typography>
          </div>
          <div>
            <TextField
              id="filled-basic"
              label="Search "
              variant="filled"
              className="bg-slate-50 rounded-3xl hidden md:flex"
            ></TextField>
          </div>
          <Badges />
        </Toolbar>
      </AppBar>
      <Typography paragraph>Hemwo!</Typography>
    </>
  );
}
export default App;
