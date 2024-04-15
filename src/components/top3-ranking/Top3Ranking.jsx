import React from "react";
import { Grid, Box, Stack, Typography, Paper } from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";

const Top3Ranking = () => {
  return (
    <Paper sx={{ background: "linear-gradient(0deg, red 50%, black 93%)" }}>
      <Grid container>
        <Grid item xs={4}>
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
              <Box
                sx={{
                  border: "3px solid #C9C4C2",
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
              <Box className="ribbon">
                <span className="ribbon2">2ND</span>
              </Box>
            </Stack>

            <Typography variant="h6">Jake Black</Typography>
            <Typography variant="h4">00:55.796</Typography>
            <Typography variant="caption">31.08.2022</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack
            spacing={2}
            sx={{
              background: "linear-gradient(0deg, red 50%, black 97%)",
              alignItems: "center",
              color: "white",
            }}
          >
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
            <Typography sx={{ textTransform: "uppercase" }} variant="caption">
              <Typography component="span" variant="h6">
                1
              </Typography>
              st Place
            </Typography>
            <Typography variant="h6">Jake Black</Typography>
            <Typography variant="h4">00:55.796</Typography>
            <Typography variant="caption">31.08.2022</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
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
              <Box className="ribbon">
                <span className="ribbon2">3RD</span>
              </Box>
            </Stack>

            <Typography variant="h6">Jake Black</Typography>
            <Typography variant="h4">00:55.796</Typography>
            <Typography variant="caption">31.08.2022</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Top3Ranking;
