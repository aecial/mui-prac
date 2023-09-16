import { Badge, Avatar } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Badges = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Badge badgeContent={5} color="error">
        <MailOutlinedIcon className="text-white" />
      </Badge>
      <Badge badgeContent={5} color="error">
        <NotificationsNoneOutlinedIcon className="text-white" />
      </Badge>
      <Avatar alt="Teddy Pascual" src="./src/assets/profile.jpg" />
    </div>
  );
};

export default Badges;
