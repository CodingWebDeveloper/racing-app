import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectInput from "../select-input/SelectInput";
import { useGetAllTracksQuery } from "../../store/slices/api/tracksApiSlice";
import { useGetAllKartsQuery } from "../../store/slices/api/kartsApiSlice";
import AddIcon from "@mui/icons-material/Add";
import { useGetAllUsersQuery } from "../../store/slices/api/usersApiSlice";

const INITIAL_STATE = {
  racerId: null,
  trackId: null,
  kartId: null,
  laps: [
    {
      lapTime: "",
    },
  ],
};

const RaceFormDialog = ({
  open,
  handleClose,
  submitHandler,
  submitText,
  data,
}) => {
  // States
  const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);
  const [raceInput, setRaceInput] = useState(INITIAL_STATE);

  // Queries
  const { data: tracksData } = useGetAllTracksQuery();
  const { data: kartsData } = useGetAllKartsQuery();
  const { data: racersData } = useGetAllUsersQuery();

  // Handlers
  const handleSubmit = async () => {
    setIsFirstSubmitted(true);
    await submitHandler(raceInput);
  };

  const handleChangeRacer = (event) => {
    setRaceInput({ ...raceInput, racerId: event.target.value });
  };

  const handleChangeTrack = (event) => {
    setRaceInput({ ...raceInput, trackId: event.target.value });
  };

  const handleChangeKart = (event) => {
    setRaceInput({ ...raceInput, kartId: event.target.value });
  };

  const handleChangeLapTime = (index, event) => {
    const newLapTime = event.target.value;
    const newLaps = [...raceInput.laps];
    newLaps[index].lapTime = newLapTime;
    setRaceInput({ ...raceInput, laps: newLaps });
  };

  const handleAddLap = () => {
    const newLaps = [...raceInput.laps, { lapTime: "" }];
    setRaceInput({ ...raceInput, laps: newLaps });
  };

  // Other variables
  const racersOptions =
    racersData?.map((racer) => ({
      label: `${racer.firstName} ${racer.lastName}`,
      value: racer.racerId,
    })) ?? [];

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

  // Effects
  useEffect(() => {
    if (data) {
      setRaceInput({
        racerId: data.racer.racerId,
        kartId: data.raceKart.kartId,
        trackId: data.track.trackId,
      });
    }
  }, [data]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Kart</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <SelectInput
            label="Racer"
            value={raceInput.racerId}
            handleChange={handleChangeRacer}
            options={racersOptions}
          />
          <SelectInput
            label="Track"
            value={raceInput.trackId}
            handleChange={handleChangeTrack}
            options={trackOptions}
            error={isFirstSubmitted && !raceInput.trackId}
            helperText={
              isFirstSubmitted && !raceInput.trackId ? "Track is required" : ""
            }
          />
          <SelectInput
            label="Kart"
            value={raceInput.kartId}
            handleChange={handleChangeKart}
            options={kartOptions}
            error={isFirstSubmitted && !raceInput.kartId}
            helperText={
              isFirstSubmitted && !raceInput.kartId ? "Kart is required" : ""
            }
          />
          <Typography>Laps</Typography>
          <Button onClick={handleAddLap}>
            <AddIcon />
          </Button>
          {raceInput.laps.map((lap, index) => (
            <TextField
              sx={{
                position: "relative",
                width: "100%",
                background: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.9)",
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  background: "#fff",
                  paddingLeft: 1,
                  paddingRight: 1,
                },
              }}
              margin="normal"
              required
              fullWidth
              label="Lap time"
              name="Lap time"
              value={lap.lapTime}
              onChange={(event) => handleChangeLapTime(index, event)}
              autoFocus
              error={isFirstSubmitted && !lap.lapTime}
              helperText={
                isFirstSubmitted && !lap.lapTime ? "Lap time is required" : ""
              }
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{submitText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RaceFormDialog;
