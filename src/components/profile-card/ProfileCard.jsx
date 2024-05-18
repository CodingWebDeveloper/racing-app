import React from "react";
import { Grid, Avatar, Typography, Stack, Box } from "@mui/material";
import HexagonIcon from "@mui/icons-material/Hexagon";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/usersSlice";

const ProfileCard = () => {
  // Selectors
  const user = useSelector(selectUser);

  // Other variables
  const { firstName, lastName, city, ageRange, expertise, photo } = user;

  return (
    <Grid container columnGap={1} alignItems="center">
      <Grid item>
        <Avatar sx={{ width: 56, height: 56 }} src={photo} />
      </Grid>
      <Grid item xs>
        <Typography
          sx={{ color: "white" }}
        >{`${firstName} ${lastName}`}</Typography>
        <Stack direction="row">
          <Stack direction="row" columnGap={1}>
            <Box sx={{ position: "relative" }}>
              <KeyboardArrowUpIcon
                sx={{ position: "absolute", color: "#FFD7AB" }}
              />
              <HexagonIcon sx={{ color: "#EE7B41" }} />
            </Box>
            <Typography sx={{ color: "white" }}>
              {expertise} - {ageRange}
            </Typography>
          </Stack>
          <LocationOnIcon sx={{ color: "red" }} />
          <Typography sx={{ color: "white" }}>{city}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
