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
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import Badges from "./Badges";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import MenuIcon from "@mui/icons-material/Menu";
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
          <Badges onClick={() => setDrawerOpen(true)} />
          <Button variant="outlined" className="text-white">
            <MenuIcon
              fontSize="large"
              className="block md:hidden"
              onClick={() => setDrawerOpen(true)}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className="w-44 relative bg-black"
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className="w-full h-full p-4 bg-slate-50 flex flex-col justify-between">
          <div>
            <Avatar
              alt="Teddy Pascual"
              src="./src/assets/profile.jpg"
              className="w-44 h-44"
            />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Badge badgeContent={5} color="error">
                      <NotificationsNoneOutlinedIcon className="" />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Badge badgeContent={5} color="error">
                      <MailOutlinedIcon className="" />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary="Messages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PortraitIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <Button variant="contained" color="error">
            Logout
          </Button>
        </Box>
      </Drawer>
      <main></main>
    </>
  );
}
export default App;
