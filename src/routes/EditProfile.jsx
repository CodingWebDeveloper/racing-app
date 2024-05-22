import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../store/slices/usersSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdateUserMutation } from "../store/slices/api/usersApiSlice";
import { validateProfile } from "../utils/validations";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const EditProfile = () => {
  // General
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { racerId, photo, firstName, lastName, city } = user;

  // States
  const [userInput, setUserInput] = useState({
    photo,
    firstName,
    lastName,
    city,
  });
  const [open, setOpen] = useState(false);
  const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);

  // Queries
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  // Handlers
  const handleSubmitBasicInfo = async () => {
    try {
      const evaluatedError = validateProfile(userInput);
      const isValid = Object.keys(evaluatedError).length === 0;
      setIsFirstSubmitted(true);

      if (!isValid) {
        return;
      }

      const data = await updateUser({
        racerId,
        userInput: {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          city: userInput.city,
        },
      }).unwrap();

      if (data) {
        dispatch(setUser(data));
      }
    } catch (error) {}
  };

  const handleSubmitPhoto = async () => {
    try {
      updateUser({
        racerId,
        userInput: {
          photo: userInput.photo,
        },
      }).unwrap();

      dispatch(setUser({ ...user, photo: userInput.photo }));
      handleClose();
    } catch (error) {}
  };

  const handlePhotoChange = (event) => {
    setUserInput({
      ...userInput,
      photo: event.target.value,
    });
  };

  const handleFirstNameChange = (event) => {
    setUserInput({
      ...userInput,
      firstName: event.target.value,
    });
  };

  const handleLastNameChange = (event) => {
    setUserInput({
      ...userInput,
      lastName: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setUserInput({
      ...userInput,
      city: event.target.value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUserInput({
      firstName,
      lastName,
      city,
      photo,
    });
  }, [user]);

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, .8)", width: "90%" }}>
      {isLoading && <LoadingSpinner />}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            onChange={handlePhotoChange}
            value={userInput.photo}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSubmitPhoto}
            disabled={!userInput.photo}
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ backgroundColor: "black", padding: "8px" }}>
        <Typography sx={{ color: "white" }}>Basic Information</Typography>
      </Box>
      <Stack sx={{ padding: "16px" }} rowGap={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Stack>
              {photo ? (
                <img
                  style={{ width: "136px", height: "136px" }}
                  src={photo}
                  alt="profile"
                />
              ) : (
                <Box
                  sx={{
                    border: "3px solid #C9C4C2",
                    height: "136px",
                    width: "136px",
                    backgroundColor: "#CFCFCF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <SportsMotorsportsIcon
                    sx={{ width: "63px", height: "63px", color: "#919191" }}
                  />
                </Box>
              )}
            </Stack>

            <Button
              variant="contained"
              sx={{
                marginTop: "16px",
                textTransform: "unset",
                width: "136px",
              }}
              onClick={handleOpen}
            >
              Change Image
            </Button>
          </Grid>
          <Grid item xs>
            <Grid
              container
              spacing={2}
              sx={{ marginBottom: "16px" }}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <TextField
                  size="small"
                  sx={{
                    position: "relative",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.9)",
                    },
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      background: "#fff",
                      paddingLeft: 1,
                      paddingRight: 1,
                    },
                  }}
                  id="outlined-basic"
                  label="First Name"
                  value={userInput.firstName}
                  onChange={handleFirstNameChange}
                  variant="outlined"
                  fullWidth
                  error={isFirstSubmitted && !userInput.firstName}
                  helperText={
                    isFirstSubmitted && !userInput.firstName
                      ? "First Name is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="small"
                  sx={{
                    position: "relative",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.9)",
                    },
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      background: "#fff",
                      paddingLeft: 1,
                      paddingRight: 1,
                    },
                  }}
                  id="outlined-basic"
                  label="Last Name"
                  value={userInput.lastName}
                  onChange={handleLastNameChange}
                  variant="outlined"
                  fullWidth
                  error={isFirstSubmitted && !userInput.lastName}
                  helperText={
                    isFirstSubmitted && !userInput.lastName
                      ? "Last Name is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
                  id="city"
                  label="City"
                  name="city"
                  value={userInput.city}
                  onChange={handleCityChange}
                  autoFocus
                  error={isFirstSubmitted && !userInput.city}
                  helperText={
                    isFirstSubmitted && !userInput.city
                      ? "City is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ maxWidth: "320px", width: "100%" }}
                  onClick={handleSubmitBasicInfo}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default EditProfile;
