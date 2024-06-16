import React from "react";
import LoadingSpinner from "../shared/LoadingSpinner";
import { Grid } from "@mui/material";
import { useGetAllKartsQuery } from "../../store/slices/api/kartsApiSlice";
import KartCard from "../karts-card/KartCard";

const KartsList = () => {
  const { data, isLoading } = useGetAllKartsQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Grid container spacing={2}>
      {data?.map((kart) => (
        <Grid item xs={12} md={6}>
          <KartCard key={kart.id} kart={kart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default KartsList;
