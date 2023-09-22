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
function App() {
  return (
    <>
      {/* <PhotoAlbum /> */}
      <CssBaseline />
      <Navbar />
      <main className="p-4 items-center gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <SideNavigation />
          <div className="flex flex-col items-center gap-5">
            <Post
              imgSrc={"./src/assets/profile.jpg"}
              header={"I am Teddy Pascual"}
              // month={"September"}
              // day={"21"}
              // year={"2023"}
            />
            <Post
              imgSrc={
                "https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              header={"Dodge Challenger"}
              // month={"September"}
              // day={"21"}
              // year={"2023"}
            />
            <Post
              imgSrc={
                "https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              header={"Dodge Challenger"}
              month={"September"}
              day={"21"}
              year={"2023"}
            />
          </div>
          <Aside />
        </div>
      </main>
    </>
  );
}
export default App;
