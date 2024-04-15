import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Dashboard from "@mui/icons-material/FeaturedPlayList";
import Profile from "@mui/icons-material/SportsMotorsports";
import Ranking from "@mui/icons-material/EmojiEvents";
import Results from "@mui/icons-material/EmojiFlags";
import HexagonIcon from "@mui/icons-material/Hexagon";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tracks from "@mui/icons-material/Route";
import { useLocation, useNavigate } from "react-router-dom";

const activeStyles = {
  background:
    "linear-gradient(135deg, rgba(0,94,184,0) 20%, rgba(0,94,184,1) 90%)",
};

const DrawerContent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateProfile = () => {
    navigate("/profile");
  };

  const handleNavigateRanking = () => {
    navigate("/ranking");
  };

  const handleNavigateResults = () => {
    navigate("/results");
  };

  const handleNavigateTracks = () => {
    navigate("/tracks");
  };

  const handleNavigateChallenges = () => {
    navigate("/challenges");
  };

  const isDashboard = pathname === "/";
  const isProfile = pathname === "/profile";
  const isRanking = pathname === "/ranking";
  const isResults = pathname === "/results";
  const isTracks = pathname === "/tracks";
  const isChallenges = pathname === "/challenges";

  return (
    <div>
      <Toolbar />
      <Divider />
      <Grid sx={{ paddingInline: "16px" }} container spacing={1}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item xs>
          <Typography sx={{ color: "white" }}>Erkan Kamber</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ position: "relative" }}>
              <KeyboardArrowUpIcon
                sx={{ position: "absolute", color: "#FFD7AB" }}
              />
              <HexagonIcon sx={{ color: "#EE7B41" }} />
            </Box>
            <Typography sx={{ color: "white" }} variant="caption">
              DRIVER
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <List>
        <ListItem
          sx={isDashboard ? activeStyles : {}}
          onClick={handleNavigateHome}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Dashboard sx={{ color: "#C80314" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "white", fontWeight: "bold" }}
              primary="Dashboard"
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={isProfile ? activeStyles : {}}
          onClick={handleNavigateProfile}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Profile sx={{ transform: "rotateY(180deg)", fill: "#C80314" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "white", fontWeight: "bold" }}
              primary="Profile"
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={isRanking ? activeStyles : {}}
          onClick={handleNavigateRanking}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Ranking sx={{ color: "#C80314" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "white", fontWeight: "bold" }}
              primary="Ranking"
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={isResults ? activeStyles : {}}
          onClick={handleNavigateResults}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Results sx={{ color: "#C80314" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "white", fontWeight: "bold" }}
              primary="Results"
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={isTracks ? activeStyles : {}}
          onClick={handleNavigateTracks}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Tracks sx={{ color: "#C80314" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "white", fontWeight: "bold" }}
              primary="Tracks"
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={isChallenges ? activeStyles : {}}
          onClick={handleNavigateChallenges}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Profile
                sx={{
                  color: "#C80314",
                  transform: "rotateY(180deg) rotateZ(-30deg)",
                }}
              />
              <Profile
                sx={{
                  color: "#C80314",
                  transform:
                    "translateX(-10px) translateY(-3px) rotateZ(-30deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "white", fontWeight: "bold" }}
              primary="Challenges"
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default DrawerContent;
