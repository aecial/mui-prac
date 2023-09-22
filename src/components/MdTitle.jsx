import { Typography } from "@mui/material";
const MdTitle = ({ text }) => {
  return (
    <Typography variant="h4" className="text-gray-500 text-center">
      {text}
    </Typography>
  );
};

export default MdTitle;
