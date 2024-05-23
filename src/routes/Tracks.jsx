import { Grid } from "@mui/material";
import React from "react";
import TrackList from "../components/track-list/TrackList";

const Tracks = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <TrackList />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Tracks;
