import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SelectInput from "../select-input/SelectInput";
import TimerIcon from "@mui/icons-material/Timer";
import FilterListIcon from "@mui/icons-material/FilterList";
import Track from "@mui/icons-material/Route";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const FilterSession = () => {
  return (
    <Paper sx={{ background: "rgba(0, 0, 0, 0.8)" }}>
      <Stack
        sx={{ background: "black", padding: 1 }}
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <FilterListIcon fontSize="large" sx={{ color: "red" }} />
        <Typography sx={{ fontStyle: "uppercase", color: "white" }}>
          Filter session by
        </Typography>
      </Stack>
      <Stack sx={{ padding: 1 }} spacing={1} alignItems="start">
        <SelectInput
          label={"Track"}
          icon={<Track sx={{ color: "red" }} />}
          value={"1"}
          handleChange={() => {}}
          options={[{ value: "1", label: "Laute" }]}
        />
        <SelectInput
          label={"Time"}
          icon={<TimerIcon sx={{ color: "red" }} />}
          value={"All"}
          handleChange={() => {}}
          options={[{ value: "All", label: "All time" }]}
        />
        <SelectInput
          label={"Car model"}
          icon={<DirectionsCarIcon sx={{ color: "red" }} />}
          value={"SR5"}
          handleChange={() => {}}
          options={[{ value: "SR5", label: "SR5" }]}
        />
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <EmojiEventsIcon fontSize="large" sx={{ color: "red" }} />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            labelPlacement="start"
            sx={{ color: "white" }}
            label="Show Only Victories"
          />
        </Stack>
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <TimerIcon fontSize="large" sx={{ color: "red" }} />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            labelPlacement="start"
            sx={{ color: "white" }}
            label="Best Time Session"
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FilterSession;
