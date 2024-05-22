import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/slices/usersSlice";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdateUserMutation } from "../../store/slices/api/usersApiSlice";

const ProfileInfoCard = () => {
  // General hooks
  const dispatch = useDispatch();

  // Selectors
  const user = useSelector(selectUser);
  const { racerId, firstName, lastName, city, ageRange, photo } = user ?? {};

  // States
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Queries
  const [updateUser] = useUpdateUserMutation();

  // Handlers
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      updateUser({
        racerId,
        userInput: {
          photo: imageUrl,
        },
      }).unwrap();

      dispatch(setUser({ ...user, photo: imageUrl }));
      handleClose();
    } catch (error) {}
  };

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: "16px",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, .8)",
      }}
    >
      <Grid container columnGap={3}>
        <Grid item>
          {photo ? (
            <Box sx={{ position: "relative", height: "126px", width: "126px" }}>
              <img height="100%" width="100%" src={photo} alt="profile" />
              <Button
                onClick={handleOpen}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  ":hover": {
                    backgroundColor: "rgb(0, 0, 0)",
                  },
                  color: "white",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  textTransform: "unset",
                }}
              >
                <EditIcon fontSize="small" />
                <Typography variant="caption">Change Image</Typography>
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                border: "3px solid #C9C4C2",
                marginTop: "-45px !important",
                backgroundColor: "#CFCFCF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <SportsMotorsportsIcon
                sx={{ width: "63px", height: "63px", color: "#919191" }}
              />
              <Button
                sx={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  ":hover": {
                    backgroundColor: "rgb(0, 0, 0)",
                  },
                  color: "white",
                  position: "absolute",
                  bottom: "0px",
                  textTransform: "unset",
                }}
              >
                <EditIcon fontSize="small" />
                <Typography variant="caption">Change Image</Typography>
              </Button>
            </Box>
          )}
        </Grid>
        <Grid item xs>
          <Stack>
            <Typography sx={{ color: "white" }} variant="h3">
              {`${firstName} ${lastName}`}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase", color: "white" }}
              >
                Beginner
              </Typography>
              <LocationOnIcon sx={{ color: "red" }} />
              <Typography variant="caption" sx={{ color: "white" }}>
                {city}
              </Typography>
              <Divider
                sx={{ backgroundColor: "white" }}
                orientation="vertical"
                flexItem
              />
              <Typography variant="caption" sx={{ color: "white" }}>
                {ageRange}
              </Typography>
              <Divider
                sx={{ backgroundColor: "white" }}
                orientation="vertical"
                flexItem
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
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
            onChange={handleChangeImageUrl}
            value={imageUrl}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} disabled={!imageUrl}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileInfoCard;
