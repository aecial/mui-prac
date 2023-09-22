import React from "react";
import MdTitle from "./MdTitle";
import { Avatar, AvatarGroup } from "@mui/material";
const Aside = () => {
  return (
    <div className=" border-2 border-solid flex flex-col items-center border-gray-200 gap-4">
      <MdTitle text={"Online Friends"} />
      <AvatarGroup max={5} total={20}>
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
    </div>
  );
};

export default Aside;
