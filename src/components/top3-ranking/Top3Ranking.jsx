import React from "react";
import { Grid, Typography } from "@mui/material";
import { useGetRankingsQuery } from "../../store/slices/api/rankingApiSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";
import { selectKart, selectTrack } from "../../store/slices/raceFilterSlice";
import { selectUser } from "../../store/slices/usersSlice";
import OtherTopRankingCard from "../other-top-ranking-card/OtherTopRankingCard";
import FirstTopRankingCard from "../first-top-ranking-card/FirstTopRankingCard";

const Top3Ranking = () => {
  // Selectors
  const user = useSelector(selectUser);
  const track = useSelector(selectTrack);
  const kart = useSelector(selectKart);

  // Queries
  const { data, isLoading } = useGetRankingsQuery({
    racerId: user.racerId,
    trackId: track,
    kartId: kart,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (data?.length === 0) {
    return (
      <Typography sx={{ color: "white" }} textAlign="center">
        No Rankings
      </Typography>
    );
  }

  // Other variables
  const top3 = data?.slice(0, 3) ?? [];

  return (
    <Grid container>
      {top3[1] && <OtherTopRankingCard ranking={top3[1]} />}
      {top3[0] && <FirstTopRankingCard ranking={top3[0]} />}
      {top3[2] && <OtherTopRankingCard ranking={top3[2]} />}
    </Grid>
  );
};

export default Top3Ranking;
