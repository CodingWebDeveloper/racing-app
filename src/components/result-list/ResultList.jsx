import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ResultItem from "../result-item/ResultItem";
import { useNavigate } from "react-router-dom";
import { useGetRankingsQuery } from "../../store/slices/api/rankingApiSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/usersSlice";
import { selectKart, selectTrack } from "../../store/slices/raceFilterSlice";

const ResultList = () => {
  // General hooks
  const navigate = useNavigate();

  // Selectors
  const user = useSelector(selectUser);
  const track = useSelector(selectTrack);
  const kart = useSelector(selectKart);

  // Queries
  const { data, isLoading } = useGetRankingsQuery(
    {
      racerId: user.racerId,
      trackId: track,
      kartId: kart,
    },
    { skip: !user.racerId || !track || !kart }
  );

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

  // Handlers
  const handleNavigateRanking = () => {
    navigate("/ranking");
  };

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      {top3.map((ranking) => (
        <ResultItem
          key={ranking.position}
          ranking={ranking}
          active={ranking.racerId === user.racerId}
        />
      ))}
      <Button
        fullWidth
        variant="contained"
        sx={{ textTransform: "unset", borderRadius: "unset" }}
        onClick={handleNavigateRanking}
      >
        View track results
      </Button>
    </Box>
  );
};

export default ResultList;
