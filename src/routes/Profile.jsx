import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import ProfileInfoCard from "../components/profile-info-card/ProfileInfoCard";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackIcon from "@mui/icons-material/Route";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import GroupIcon from "@mui/icons-material/Group";
import Results from "@mui/icons-material/EmojiFlags";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // General hooks
  const navigate = useNavigate();

  // Handlers
  const handleNavigateEditProfile = () => {
    navigate("/edit-profile");
  };
  return (
    <Box sx={{ width: "90%" }}>
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
              0.00 KM Distance
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={{ flex: "auto" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTimeIcon
              sx={{ color: "white", width: "36px", height: "36px" }}
            />
            <Typography sx={{ textTransform: "uppercase", color: "white" }}>
              00:00 Drive Hours
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
              Ace Motorsport
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
              <Results sx={{ color: "white" }} />
              <Typography sx={{ color: "white", marginLeft: "8px" }}>
                Results
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HexagonOutlinedIcon
                  sx={{
                    color: "#8b0000",
                    width: "36px",
                    height: "36px",
                  }}
                />
                <GroupIcon
                  sx={{
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    color: "white",
                  }}
                />
              </Box>
              <Typography sx={{ color: "white", marginLeft: "8px" }}>
                Friends
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
