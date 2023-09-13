// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
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
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
function App() {
  const cards = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/16863991/pexels-photo-16863991/free-photo-of-back-of-white-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/10854772/pexels-photo-10854772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/13542034/pexels-photo-13542034.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  // const [open, setOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className="mr-4" fontSize="large" />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
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
                className="border-black border-4 "
              >
                <Card className=" w-full h-auto ">
                  <CardMedia
                    image={item.src}
                    className="w-full h-24 pt-[56.25%]"
                    title="Dodge"
                  />
                  <CardContent className=" flex-grow ">
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>This is a media card</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
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
