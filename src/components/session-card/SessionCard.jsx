import React from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LapList from "../lap-list/LapList";

const SessionCard = ({ session, currentRaceId, handleSelect }) => {
  const { raceId, racer, laps, raceKart, track } = session ?? {};

  // Other variables
  const { firstName, lastName, photo } = racer;
  const { trackName } = track;
  const { model } = raceKart;

  return (
    <Box>
      <Paper
        sx={{
          borderRadius: "8px",
          border: "3px solid red",
          padding: 1,
          background: "linear-gradient(160deg, #222, #333)",
        }}
      >
        <Grid container columnSpacing={2}>
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            {racer.photo ? (
              <img
                src={photo}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid black",
                }}
              />
            ) : (
              <Box
                sx={{
                  border: "3px solid #C9C4C2",
                  marginTop: "-45px !important",
                  height: "126px",
                  width: "126px",
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
          </Grid>
          <Grid item xs>
            <Stack justifyContent="space-between" spacing={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    sx={{ color: "white" }}
                  >{`${firstName} ${lastName}`}</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Stack direction="row" alignItems="center">
                    <LocationOnIcon fontSize="small" sx={{ color: "red" }} />
                    <Typography sx={{ color: "white" }} variant="caption">
                      {trackName}
                    </Typography>
                    <DirectionsCarIcon
                      fontSize="small"
                      sx={{ color: "red", marginLeft: 1 }}
                    />
                    <Typography sx={{ color: "white" }} variant="caption">
                      {model}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      if (raceId === currentRaceId) {
                        handleSelect(null);
                      } else {
                        handleSelect(raceId);
                      }
                    }}
                    endIcon={<ExpandCircleDownIcon />}
                  >
                    Results
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      {currentRaceId === raceId && (
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <LapList laps={laps} />
        </Box>
      )}
    </Box>
  );
};

export default SessionCard;
