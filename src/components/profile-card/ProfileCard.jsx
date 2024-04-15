import React from "react";
import { Grid, Avatar, Typography, Stack, Box } from "@mui/material";
import HexagonIcon from "@mui/icons-material/Hexagon";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ProfileCard = () => {
  return (
    <Grid container columnGap={1} alignItems="center">
      <Grid item>
        <Avatar sx={{ width: 56, height: 56 }} />
      </Grid>
      <Grid item xs>
        <Typography sx={{ color: "white" }}>Erkan Kamber</Typography>
        <Stack direction="row">
          <Stack direction="row" columnGap={1}>
            <Box sx={{ position: "relative" }}>
              <KeyboardArrowUpIcon
                sx={{ position: "absolute", color: "#FFD7AB" }}
              />
              <HexagonIcon sx={{ color: "#EE7B41" }} />
            </Box>
            <Typography sx={{ color: "white" }}>DRIVER - 18 - 40</Typography>
          </Stack>
          <LocationOnIcon sx={{ color: "red" }} />
          <Typography sx={{ color: "white" }}>Asenovgrad, Bulgaria</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
