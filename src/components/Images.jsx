import { ImageList, ImageListItem } from "@mui/material";

const Images = () => {
  return (
    <div>
      <ImageList cols={3} rowHeight={164}>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default Images;
