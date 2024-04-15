import React from "react";
import { Stack, Typography, Box, Grid } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HexagonIcon from "@mui/icons-material/Hexagon";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";

const Stats = () => {
  return (
    <Stack>
      <SectionHeaderCard
        icon={
          <EmojiEventsIcon
            sx={{
              zIndex: 1,
              width: "48px",
              height: "48px",
              marginTop: "8px",
              color: "white",
            }}
          />
        }
        title="Stats"
      />
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "8px",
          marginTop: "8px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DoubleArrowIcon
              sx={{
                color: "white",
                position: "absolute",
                transform: "rotateZ(-90deg)",
              }}
            />
            <HexagonIcon sx={{ color: "red", width: "36px", height: "36px" }} />
          </Box>
          <Typography sx={{ color: "white" }}>33 Points</Typography>
        </Stack>
      </Box>

      <Stack
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "8px" }}
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <SpeedIcon sx={{ color: "red", width: "36px", height: "36px" }} />
        <Typography sx={{ color: "white" }}>33.06 Driven KMs</Typography>
      </Stack>
      <Stack
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "8px" }}
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <AccessTimeIcon sx={{ color: "red", width: "36px", height: "36px" }} />
        <Typography sx={{ color: "white" }}>00.42 Driven Time</Typography>
      </Stack>
    </Stack>
  );
};

export default Stats;
