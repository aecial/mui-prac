import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
const SideNavigation = ({ homeClick, onClick, groupClick }) => {
  return (
    <div className="bg-slate-100 uppercase hidden md:block">
      <List className="p-4 flex flex-col gap-4 fixed w-96">
        <ListItemButton className="shadow-sm shadow-black" onClick={homeClick}>
          <ListItemIcon>
            <HomeOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton className="shadow-sm shadow-black" onClick={onClick}>
          <ListItemIcon>
            <AutoStoriesOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton className="shadow-sm shadow-black" onClick={groupClick}>
          <ListItemIcon>
            <GroupsOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SideNavigation;
