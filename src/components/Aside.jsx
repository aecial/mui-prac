import React from "react";
import MdTitle from "./MdTitle";
import { Avatar, AvatarGroup } from "@mui/material";
const Aside = ({ online }) => {
  return (
    <div className=" border-2 border-solid flex flex-col items-center border-gray-200 gap-5">
      <MdTitle text={"Online Friends"} />
      <AvatarGroup max={6} total={online}>
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-20 h-20"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-20 h-20"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-20 h-20"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-20 h-20"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-20 h-20"
        />
      </AvatarGroup>
      <MdTitle text={"Latest Photos"} />
    </div>
  );
};

export default Aside;
