import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SelectInput from "../select-input/SelectInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import Track from "@mui/icons-material/Route";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useGetAllTracksQuery } from "../../store/slices/api/tracksApiSlice";
import { useGetAllKartsQuery } from "../../store/slices/api/kartsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  selectKart,
  selectTrack,
  setKart,
  setTrack,
} from "../../store/slices/raceFilterSlice";

const FilterSession = () => {
  //General hooks
  const dispatch = useDispatch();

  // Queries
  const track = useSelector(selectTrack);
  const kart = useSelector(selectKart);

  // Queries
  const { data: allTracksData } = useGetAllTracksQuery();
  const { data: allKartsData } = useGetAllKartsQuery();

  // Handlers
  const handleChangeTrack = (event) => {
    dispatch(setTrack(event.target.value));
  };

  const handleChangeKart = (event) => {
    dispatch(setKart(event.target.value));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };
  // Other variables
  const trackOptions = allTracksData?.map((track) => ({
    label: track.trackName,
    value: track.trackId,
  }));

  const kartsOptions = allKartsData?.map((kart) => ({
    label: kart.model,
    value: kart.kartId,
  }));

  const showClearFilter = track || kart;

  return (
    <Paper sx={{ background: "rgba(0, 0, 0, 0.8)" }}>
      <Stack
        sx={{ background: "black", padding: 1 }}
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <FilterListIcon fontSize="large" sx={{ color: "red" }} />
        <Typography
          sx={{ textTransform: "uppercase", color: "white", flexGrow: 1 }}
        >
          Filter session by
        </Typography>
        {showClearFilter && (
          <Button onClick={handleClearFilter}>Clear Filter</Button>
        )}
      </Stack>
      <Stack sx={{ padding: 1 }} spacing={1} alignItems="start">
        <SelectInput
          label={"Track"}
          icon={<Track sx={{ color: "red" }} />}
          value={track}
          handleChange={handleChangeTrack}
          options={trackOptions ?? []}
        />
        <SelectInput
          label={"Car model"}
          icon={<DirectionsCarIcon sx={{ color: "red" }} />}
          value={kart}
          handleChange={handleChangeKart}
          options={kartsOptions ?? []}
        />
      </Stack>
    </Paper>
  );
};

export default FilterSession;
