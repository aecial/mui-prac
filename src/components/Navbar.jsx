import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Drawer,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Badge,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import MenuIcon from "@mui/icons-material/Menu";
import Badges from "../Badges";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav>
      <AppBar className="h-20" position="relative">
        <Toolbar className="flex justify-between items-center p-4">
          <div className="flex items-center justify-center">
            <Diversity2OutlinedIcon
              className="mr-4 p-1 bg-white rounded-2xl"
              fontSize="large"
              color="primary"
            />
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
          <Button variant="outlined" className="text-white md:hidden">
            <MenuIcon
              fontSize="large"
              className="block "
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
    </nav>
  );
};

export default Navbar;
