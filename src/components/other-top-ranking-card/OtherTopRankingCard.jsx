import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";

const OtherTopRankingCard = ({ ranking }) => {
  const {
    position,
    racerPhoto,
    racerFirstName,
    racerLastName,
    raceDate,
    bestTime,
  } = ranking;

  const name = `${racerFirstName} ${racerLastName}`;
  const positionText = `${position}${position === 2 ? "ND" : "RD"}`;

  return (
    <Grid item xs={12} md={4}>
      <Stack
        className="bg-carbon-fiber"
        spacing={2}
        alignItems={"center"}
        sx={{
          transform: "scale(0.75)",
          color: "white",
        }}
      >
        <Stack>
          {racerPhoto ? (
            <img
              height="120px"
              width="100%"
              src={racerPhoto}
              alt="ranking-profile"
            />
          ) : (
            <Box
              sx={{
                border: "3px solid #6B3E29",
                marginTop: "-45px !important",
                height: "120px",
                backgroundColor: "#CFCFCF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <SportsMotorsportsIcon
                sx={{ width: "126px", height: "126px", color: "#919191" }}
              />
            </Box>
          )}

          <Box className="ribbon">
            <span className="ribbon2">{positionText}</span>
          </Box>
        </Stack>

        <Typography variant="h6">{name}</Typography>
        <Typography variant="h5">{bestTime}</Typography>
        <Typography variant="caption">{raceDate}</Typography>
      </Stack>
    </Grid>
  );
};

export default OtherTopRankingCard;
