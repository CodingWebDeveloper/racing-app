import React, { useState } from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";

const SessionCard = ({ session }) => {
  const { place, total, name, bestLapTime, createdOn, location, kart } =
    session;

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "white" }}>
        #{place}/{total}
      </Typography>
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
            <img
              src="https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/hales.jpg"
              style={{
                width: "60px",
                height: "60px",
                border: "1px solid black",
              }}
            />
          </Grid>
          <Grid item xs>
            <Stack justifyContent="space-between" spacing={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography sx={{ color: "white" }}>{name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{ color: "#4caf50" }}
                    fontWeight="bold"
                  >{`Best time: ${bestLapTime}`}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TimerIcon sx={{ color: "white" }} fontSize="small" />
                    <Typography sx={{ color: "white" }}>{createdOn}</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography sx={{ color: "white" }}>
                    {location} {kart}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{ transform: "skew(-15deg)" }}
                    color="success"
                  >
                    Results
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SessionCard;
