import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const DriverProgress = () => {
  const progress = 55;

  return (
    <Box sx={{ transform: "skew(-20deg)" }}>
      <Grid container>
        <Grid item xs={3}>
          <Typography sx={{ color: "white", textTransform: "uppercase" }}>
            Beginner
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Driver
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ color: "white", textTransform: "uppercase" }}>
            Expert
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ color: "white", textTransform: "uppercase" }}>
            Racer
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ height: "60px", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "10px",
            left: 0,
            right: 0,
            background: "#005EB8",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50px",
            background:
              "linear-gradient(90deg, rgba(242,190,36,1) 25%, rgba(242,190,36,1) 50%, rgba(153,36,34,1) 80%)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "60px",
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 15px, #000 5px, #000 20px)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: `${progress}%`,
            right: 0,
            height: "60px",
            background: "black",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default DriverProgress;
