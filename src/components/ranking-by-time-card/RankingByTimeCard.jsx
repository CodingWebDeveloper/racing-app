import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import Top3Ranking from "../top3-ranking/Top3Ranking";
import RankIcon from "@mui/icons-material/Stars";
import SelectInput from "../select-input/SelectInput";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Track from "@mui/icons-material/Route";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";
import { useGetAllTracksQuery } from "../../store/slices/api/tracksApiSlice";
import { useGetAllKartsQuery } from "../../store/slices/api/kartsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectKart,
  selectTrack,
  setKart,
  setTrack,
} from "../../store/slices/raceFilterSlice";

const RankingByTimeCard = () => {
  // General hooks
  const dispatch = useDispatch();

  // Selectors
  const track = useSelector(selectTrack);
  const kart = useSelector(selectKart);

  // Queries
  const { data: tracksData } = useGetAllTracksQuery();
  const { data: kartsData } = useGetAllKartsQuery();

  // Handlers
  const handleChangeTrack = (event) => {
    dispatch(setTrack(event.target.value));
  };

  const handleChangeKart = (event) => {
    dispatch(setKart(event.target.value));
  };

  // Other variables
  const trackOptions =
    tracksData?.map((track) => ({
      label: track.trackName,
      value: track.trackId,
    })) ?? [];

  const kartOptions =
    kartsData?.map((kart) => ({
      label: kart.model,
      value: kart.kartId,
    })) ?? [];

  return (
    <Box>
      <SectionHeaderCard
        icon={
          <RankIcon
            sx={{
              zIndex: 1,
              width: "48px",
              height: "48px",
              color: "white",
            }}
          />
        }
        title="Ranking by time"
      />
      <Stack sx={{ backgroundColor: "black", padding: "16px" }} spacing={1}>
        <Grid container columnSpacing={1}>
          <Grid item xs={6}>
            <SelectInput
              label={"Kart"}
              icon={<DirectionsCarIcon sx={{ color: "red" }} />}
              value={kart}
              handleChange={handleChangeKart}
              options={kartOptions}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectInput
              label={"Track"}
              icon={<Track sx={{ color: "red" }} />}
              value={track}
              handleChange={handleChangeTrack}
              options={trackOptions}
            />
          </Grid>
        </Grid>
      </Stack>
      <Box sx={{ background: "rgba(0, 0, 0, 0.8)", padding: 1 }}>
        <Top3Ranking />
      </Box>
    </Box>
  );
};

export default RankingByTimeCard;
