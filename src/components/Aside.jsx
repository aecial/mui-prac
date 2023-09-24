import React from "react";
import MdTitle from "./MdTitle";
import { Avatar, AvatarGroup } from "@mui/material";
import Images from "./Images";
const Aside = ({ online }) => {
  return (
    <div className=" border-2 border-solid flex flex-col items-center border-gray-200 gap-5 p-4">
      <MdTitle text={"Online Friends"} />
      <AvatarGroup max={6} total={online}>
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-15 h-15"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-15 h-15"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-15 h-15"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-15 h-15"
        />
        <Avatar
          alt="Teddy Pascual"
          src="./src/assets/profile.jpg"
          className="w-15 h-15"
        />
      </AvatarGroup>
      <MdTitle text={"Latest Photos"} />
      <Images />
    </div>
  );
};

export default Aside;
