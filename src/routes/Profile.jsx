import React from "react";
import { useNavigate } from "react-router-dom";
import SessionList from "../components/session-list/SessionList";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import ProfileInfoCard from "../components/profile-info-card/ProfileInfoCard";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackIcon from "@mui/icons-material/Route";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ResultsIcon from "@mui/icons-material/EmojiFlags";
import FilterSession from "../components/filter-session/FilterSession";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/usersSlice";
import { useGetUserByRacerIdQuery } from "../store/slices/api/usersApiSlice";
import { useGetPreferredTrackQuery } from "../store/slices/api/tracksApiSlice";

const Profile = () => {
  // General hooks
  const navigate = useNavigate();

  // Selectors
  const user = useSelector(selectUser);

  // Queries
  const { data: racerData } = useGetUserByRacerIdQuery(
    {
      racerId: user?.racerId,
    },
    {
      skip: user?.racerId,
    }
  );

  const { data: preferredTrackData } = useGetPreferredTrackQuery(
    {
      racerId: user?.racerId,
    },
    {
      skip: user?.racerId,
    }
  );

  // Handlers
  const handleNavigateEditProfile = () => {
    navigate("/edit-profile");
  };

  const { racerStatistics } = racerData ?? {};
  const { drivenKms, drivenTimeMinutes } = racerStatistics ?? {};

  return (
    <Stack rowGap={3} columnGap={3}>
      <Box
        sx={{
          height: "320px",
          width: "100%",
          backgroundImage: `url(https://wallup.net/wp-content/uploads/2019/09/385645-go-kart-kart-race-racing-13-jpg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <ProfileInfoCard />
      </Box>
      <Grid
        sx={{ backgroundColor: "red", alignItems: "center", padding: "8px" }}
        container
        columnGap={3}
      >
        <Grid item sx={{ flex: "auto" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <SpeedIcon sx={{ color: "white", width: "36px", height: "36px" }} />
            <Typography sx={{ textTransform: "uppercase", color: "white" }}>
              {drivenKms ?? 0} KM Distance
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={{ flex: "auto" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTimeIcon
              sx={{ color: "white", width: "36px", height: "36px" }}
            />
            <Typography sx={{ textTransform: "uppercase", color: "white" }}>
              {drivenTimeMinutes ?? 0} Drive Minutes
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={{ flex: "auto" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <TrackIcon sx={{ color: "white", width: "36px", height: "36px" }} />
            <Typography sx={{ textTransform: "uppercase", color: "white" }}>
              Preferred Track:
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              {preferredTrackData?.trackName ?? ""}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "rgb(0, 0, 0, .8)", padding: "8px" }}>
        <Grid container alignItems="center" columnGap={3}>
          <Grid item>
            <Button variant="text" onClick={handleNavigateEditProfile}>
              <BorderColorIcon sx={{ color: "white" }} />
              <Divider
                sx={{ backgroundColor: "white", mx: "8px" }}
                orientation="vertical"
                flexItem
              />
              <Typography sx={{ color: "white" }}>Edit Profile</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <ResultsIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white", marginLeft: "8px" }}>
                Results
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <SessionList />
        </Grid>
        <Grid item xs={4}>
          <FilterSession />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Profile;
