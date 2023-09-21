import { Badge, Avatar } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Badges = ({ onClick }) => {
  return (
    <div className="md:flex justify-center items-center gap-4 hidden">
      <Badge badgeContent={5} color="error">
        <MailOutlinedIcon className="text-white" />
      </Badge>
      <Badge badgeContent={5} color="error">
        <NotificationsNoneOutlinedIcon className="text-white" />
      </Badge>
      <Avatar
        alt="Teddy Pascual"
        src="./src/assets/profile.jpg"
        onClick={onClick}
      />
    </div>
  );
};

export default Badges;
