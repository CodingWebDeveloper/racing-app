import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";

const ProfileInfoCard = () => {
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
        </Grid>
        <Grid item xs>
          <Stack>
            <Typography sx={{ color: "white" }} variant="h3">
              Erkan Kamber
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
                Asenovgrad, Bulgaria
              </Typography>
              <Divider
                sx={{ backgroundColor: "white" }}
                orientation="vertical"
                flexItem
              />
              <Typography variant="caption" sx={{ color: "white" }}>
                18-40
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
    </Box>
  );
};

export default ProfileInfoCard;
