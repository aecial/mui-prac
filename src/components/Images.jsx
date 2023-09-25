import { ImageList, ImageListItem } from "@mui/material";

const Images = () => {
  return (
    <div>
      <ImageList cols={3} rowHeight={100}>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/17286187/pexels-photo-17286187/free-photo-of-back-of-a-black-dodge-challenger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/1965_Chevrolet_Impala_Sport_Coupe%2C_front_left_%28Cruisin%27_the_River_Lowellville_Car_Show%2C_June_19th%2C_2023%29.jpg/1200px-1965_Chevrolet_Impala_Sport_Coupe%2C_front_left_%28Cruisin%27_the_River_Lowellville_Car_Show%2C_June_19th%2C_2023%29.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://www.autodeal.com.ph/custom/car-model-photo/original/toyota-supra-philippines-5d10417bd82f5.jpg" />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default Images;
