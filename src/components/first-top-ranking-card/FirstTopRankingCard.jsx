import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";

const FirstTopRankingCard = ({ ranking }) => {
  const {
    position,
    racerPhoto,
    racerFirstName,
    racerLastName,
    raceDate,
    bestTime,
  } = ranking;

  const name = `${racerFirstName} ${racerLastName}`;

  return (
    <Grid item xs={12} md={4}>
      <Stack
        spacing={2}
        sx={{
          background: "linear-gradient(0deg, red 50%, black 97%)",
          alignItems: "center",
          color: "white",
        }}
      >
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
              border: "3px solid #D86B39",
              marginTop: "-45px",
              height: "120px",
              backgroundColor: "#CFCFCF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SportsMotorsportsIcon
              sx={{ width: "126px", height: "126px", color: "#919191" }}
            />
          </Box>
        )}
        <Typography sx={{ textTransform: "uppercase" }} variant="caption">
          <Typography component="span" variant="h6">
            {position}
          </Typography>
          st Place
        </Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h5">{bestTime}</Typography>
        <Typography variant="caption">{raceDate}</Typography>
      </Stack>
    </Grid>
  );
};

export default FirstTopRankingCard;
