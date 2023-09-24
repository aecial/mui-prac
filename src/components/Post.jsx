import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const Post = ({ imgSrc, header, month, day, year }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Card className="flex flex-col shadow-black shadow-md md:w-72">
      <CardMedia image={imgSrc} lazy="true" className="h-72 w-auto " />
      <CardContent>
        <Typography variant="h4" className="text-left">
          {header}
        </Typography>
        <Typography paragraph variant="h6" className="text-gray-500">
          Posted: {month} {day}, {year}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className="flex justify-between">
        <div className="flex gap-1 items-center justify-center">
          <Button className="p-0 m-0 min-w-0" onClick={() => setLiked(!liked)}>
            {liked ? (
              <FavoriteOutlinedIcon fontSize="large" color="error" />
            ) : (
              <FavoriteBorderOutlinedIcon
                className="text-gray-500"
                fontSize="large"
              />
            )}
          </Button>
          <Button className="p-0 ml-0 min-w-0">
            <ShareOutlinedIcon fontSize="large" className="text-gray-500" />
          </Button>
          <Button className="p-0 ml-0 min-w-0">
            <CommentOutlinedIcon fontSize="large" className="text-gray-500" />
          </Button>
        </div>
        <Button>
          <MoreVertOutlinedIcon fontSize="large" className="text-gray-500" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
