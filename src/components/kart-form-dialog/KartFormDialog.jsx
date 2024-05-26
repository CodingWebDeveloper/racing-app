import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

const INITIAL_STATE = {
  model: "",
  horsePower: 0,
  kartNumber: 0,
  engineCC: 0,
  kartPhoto: "",
};

const KartFormDialog = ({
  submitHandler,
  submitText,
  data,
  open,
  handleClose,
}) => {
  // States
  const [kartInput, setKartInput] = useState(INITIAL_STATE);
  const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);

  // Handlers
  const handleSubmit = async () => {
    setIsFirstSubmitted(true);
    await submitHandler(kartInput);
    setKartInput(INITIAL_STATE);
    handleClose();
  };

  const handleModelChange = (event) => {
    setKartInput({
      ...kartInput,
      model: event.target.value,
    });
  };

  const handleHorsepowerChange = (event) => {
    setKartInput({
      ...kartInput,
      horsePower: event.target.value,
    });
  };

  const handleKartNumberChange = (event) => {
    setKartInput({
      ...kartInput,
      kartNumber: event.target.value,
    });
  };

  const handleEngineCChange = (event) => {
    setKartInput({
      ...kartInput,
      engineCC: event.target.value,
    });
  };

  const handleKartPhotoChange = (event) => {
    setKartInput({
      ...kartInput,
      kartPhoto: event.target.value,
    });
  };

  useEffect(() => {
    if (data) {
      setKartInput(data);
    }
  }, [data]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Kart</DialogTitle>
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
            label="Model"
            name="Model"
            value={kartInput.model}
            onChange={handleModelChange}
            autoFocus
            error={isFirstSubmitted && !kartInput.model}
            helperText={
              isFirstSubmitted && !kartInput.model ? "Model is required" : ""
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
            label="Horse Power"
            name="Horse Power"
            value={kartInput.horsePower}
            onChange={handleHorsepowerChange}
            autoFocus
            error={isFirstSubmitted && !kartInput.horsePower}
            helperText={
              isFirstSubmitted && !kartInput.horsePower
                ? "Horsepower is required"
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
            label="Kart Number"
            name="Kart Number"
            value={kartInput.kartNumber}
            onChange={handleKartNumberChange}
            autoFocus
            error={isFirstSubmitted && !kartInput.kartNumber}
            helperText={
              isFirstSubmitted && !kartInput.kartNumber
                ? "Kart number is required"
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
            label="Engine CC"
            name="Engine CC"
            value={kartInput.engineCC}
            onChange={handleEngineCChange}
            autoFocus
            error={isFirstSubmitted && !kartInput.engineCC}
            helperText={
              isFirstSubmitted && !kartInput.engineCC
                ? "Engine CC is required"
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
            label="Kart Photo"
            name="Kart Photo"
            value={kartInput.kartPhoto}
            onChange={handleKartPhotoChange}
            autoFocus
            error={isFirstSubmitted && !kartInput.kartPhoto}
            helperText={
              isFirstSubmitted && !kartInput.kartPhoto
                ? "Kart Photo is required"
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

export default KartFormDialog;
