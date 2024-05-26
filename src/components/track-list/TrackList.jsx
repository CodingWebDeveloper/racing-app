import React from "react";
import { useGetAllTracksQuery } from "../../store/slices/api/tracksApiSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import TrackCard from "../track-card/TrackCard";
import { Grid } from "@mui/material";

const TrackList = () => {
  const { data, isLoading } = useGetAllTracksQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Grid container spacing={2}>
      {data?.map((track) => (
        <Grid item xs={12} md={6}>
          <TrackCard key={track.id} track={track} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrackList;
