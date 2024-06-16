import { Grid } from "@mui/material";
import React from "react";
import KartsList from "../components/karts-list/KartsList";

const Karts = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <KartsList />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Karts;
