// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Avatar from "@mui/material/Avatar";
import { useState } from "react";
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
  Modal,
  Box,
  Avatar,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
function PhotoAlbum() {
  const handleOpen = (title, src) => {
    alert(`${title}`);
    return <img src={src} />;
  };
  const cards = [
    {
      id: 1,
      title: "Dodge Challenger",
      src: "https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Toyota Supra",
      src: "https://www.autodeal.com.ph/custom/car-model-photo/original/toyota-supra-philippines-5d10417bd82f5.jpg",
    },
    {
      id: 3,
      title: "Chevrolet Impala",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/1965_Chevrolet_Impala_Sport_Coupe%2C_front_left_%28Cruisin%27_the_River_Lowellville_Car_Show%2C_June_19th%2C_2023%29.jpg/1200px-1965_Chevrolet_Impala_Sport_Coupe%2C_front_left_%28Cruisin%27_the_River_Lowellville_Car_Show%2C_June_19th%2C_2023%29.jpg",
    },
    {
      id: 4,
      title: "Dodge Challenger",
      src: "https://images.pexels.com/photos/13542034/pexels-photo-13542034.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Dodge Challenger",
      src: "https://images.pexels.com/photos/13542034/pexels-photo-13542034.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Dodge Challenger",
      src: "https://images.pexels.com/photos/13542034/pexels-photo-13542034.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className="mr-4" fontSize="large" />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main className="md:pb-16 pb-4">
        <div className=" bg-slate-50 mt-16 p-4">
          <Container maxWidth="sm">
            <Typography
              align="center"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello Everyone, this is a Photo Album and I'm trying to make this
              sentence as long as possible so we can see how it looks like on
              the screen
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            {cards.map((item) => (
              <Grid
                item
                key={item.id}
                xs={12}
                sm={6}
                md={3}
                lg={6}
                xl={4}
                className="border-black border-4 "
              >
                <Card className=" w-full h-auto ">
                  <CardMedia
                    image={item.src}
                    lazy
                    className="w-full h-24 pt-[56.25%]"
                    title="Dodge"
                  />
                  <CardContent className=" flex-grow ">
                    <Typography gutterBottom variant="h5">
                      {item.title}
                    </Typography>
                    <Typography>This is a media card</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleOpen(item.title, item.src)}
                    >
                      View
                    </Button>
                    <Button size="small" className="text-slate-500">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default PhotoAlbum;

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
