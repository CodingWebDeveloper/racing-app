import { Grid, Stack } from "@mui/material";
import React from "react";
import TrackCard from "../components/track-card/TrackCard";

const TRACKS = [
  {
    name: "Live Drive TSM",
    src: "https://faceracerlive.s3.amazonaws.com/uploads/track_avatar/c22/e3c/c/normal.jpg",
    location: "Palmestron North",
  },
];

const Tracks = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Stack spacing={3}>
          {TRACKS.map((track) => {
            return <TrackCard track={track} />;
          })}
        </Stack>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Tracks;
