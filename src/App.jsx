import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import PhotoAlbum from "./PhotoAlbum";
import { useState, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
function App() {
  return <>{/* <PhotoAlbum /> */}</>;
}
export default App;

/* <Button onClick={() => setOpen(true)}>Hemwo</Button>
      <Drawer
        sx={{ width: "50%" }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1q6Zw_OrF0sOMDXl3S-8yVkUNSMo-hNmGw&usqp=CAU"
            sx={{ width: 200, height: 200 }}
          />
          <Typography paddingTop={"20px"} paragraph>
            @kledted
          </Typography>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            sx={{ color: "white" }}
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <Typography paragraph>Ror</Typography>
          </Modal>
        </Box>
      </Drawer> */
