import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

const INITIAL_STATE = {
  trackName: "",
  city: "",
  trackLengthKms: 0,
  bestTrackTime: "",
};

const TrackFormDialog = ({
  open,
  handleClose,
  submitHandler,
  submitText,
  data,
}) => {
  // States
  const [trackInput, setTrackInput] = useState(INITIAL_STATE);
  const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);

  // Mutations

  // Handlers
  const handleSubmit = async () => {
    setIsFirstSubmitted(true);
    await submitHandler(trackInput);
  };

  const handleTrackNameChange = (event) => {
    setTrackInput({
      ...trackInput,
      trackName: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setTrackInput({
      ...trackInput,
      city: event.target.value,
    });
  };

  const handleTrackLengthKmsChange = (event) => {
    setTrackInput({
      ...trackInput,
      trackLengthKms: event.target.value,
    });
  };

  const handleBestTrackTimeChange = (event) => {
    setTrackInput({
      ...trackInput,
      bestTrackTime: event.target.value,
    });
  };

  useEffect(() => {
    if (data) {
      setTrackInput(data);
    }
  }, [data]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Track</DialogTitle>
      <DialogContent>
        <Stack>
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
            label="Track Name"
            name="Track Name"
            value={trackInput.trackName}
            onChange={handleTrackNameChange}
            autoFocus
            error={isFirstSubmitted && !trackInput.trackName}
            helperText={
              isFirstSubmitted && !trackInput.trackName
                ? "Track Name is required"
                : ""
            }
          />
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
            label="City"
            name="City"
            value={trackInput.city}
            onChange={handleCityChange}
            autoFocus
            error={isFirstSubmitted && !trackInput.city}
            helperText={
              isFirstSubmitted && !trackInput.city ? "City is required" : ""
            }
          />
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
            label="Track Length"
            name="Track Length"
            value={trackInput.trackLengthKms}
            onChange={handleTrackLengthKmsChange}
            autoFocus
            error={isFirstSubmitted && !trackInput.trackLengthKms}
            helperText={
              isFirstSubmitted && !trackInput.trackLengthKms
                ? "Track Length is required"
                : ""
            }
            type="number"
          />
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
            label="Best Time"
            name="Best Time"
            value={trackInput.bestTrackTime}
            onChange={handleBestTrackTimeChange}
            autoFocus
            error={isFirstSubmitted && !trackInput.bestTrackTime}
            helperText={
              isFirstSubmitted && !trackInput.bestTrackTime
                ? "Best Time is required"
                : ""
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{submitText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TrackFormDialog;
