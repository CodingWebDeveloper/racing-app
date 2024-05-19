import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LapItem from "../lap-item/LapItem";

const LapList = ({ laps }) => {
  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography sx={{ color: "white" }}>Lap</Typography>
          </Grid>
          <Grid item xs>
            <Typography sx={{ color: "white" }}>Time</Typography>
          </Grid>
          <Grid item xs>
            <Typography sx={{ color: "white" }}>Date</Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />
      <Stack>
        {laps.map((lap, index) => (
          <LapItem key={lap.lapId} index={index} lap={lap} />
        ))}
      </Stack>
    </>
  );
};

export default LapList;
