import { Link, Typography } from "@mui/material";

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link sx={{ color: "white" }} href="https://racing-app-amber.vercel.app">
        Racing App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
