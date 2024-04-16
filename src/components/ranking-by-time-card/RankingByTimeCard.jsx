import React from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import Top3Ranking from "../top3-ranking/Top3Ranking";
import ShareIcon from "@mui/icons-material/Reply";
import RankIcon from "@mui/icons-material/Stars";
import SelectInput from "../select-input/SelectInput";
import Profile from "@mui/icons-material/SportsMotorsports";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TimerIcon from "@mui/icons-material/Timer";
import Track from "@mui/icons-material/Route";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";

const RankingByTimeCard = () => {
  return (
    <Box>
      <SectionHeaderCard
        icon={
          <RankIcon
            sx={{
              zIndex: 1,
              width: "48px",
              height: "48px",
              color: "white",
            }}
          />
        }
        title="Ranking by time"
        end={
          <Button
            sx={{
              padding: "0px",
              textTransform: "unset",
              marginRight: "8px",
            }}
            variant="contained"
          >
            Share
            <ShareIcon sx={{ transform: "rotateY(180deg)" }} fontSize="small" />
          </Button>
        }
      />
      <Stack sx={{ backgroundColor: "black", padding: "16px" }} spacing={1}>
        <Grid container columnSpacing={1}>
          <Grid item xs={4}>
            <SelectInput
              label={"Experience"}
              icon={<Profile sx={{ color: "red" }} />}
              value={"DRIVER"}
              handleChange={() => {}}
              options={[{ value: "DRIVER", label: "DRIVER" }]}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectInput
              label={"Years"}
              icon={<TimelapseIcon sx={{ color: "red" }} />}
              value={"18-40"}
              handleChange={() => {}}
              options={[{ value: "18-40", label: "18-40" }]}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectInput
              label={"Car model"}
              icon={<DirectionsCarIcon sx={{ color: "red" }} />}
              value={"SR5"}
              handleChange={() => {}}
              options={[{ value: "SR5", label: "SR5" }]}
            />
          </Grid>
        </Grid>
        <Grid container columnSpacing={1}>
          <Grid item xs={6}>
            <SelectInput
              label={"Time"}
              icon={<TimerIcon sx={{ color: "red" }} />}
              value={"All"}
              handleChange={() => {}}
              options={[{ value: "All", label: "All time" }]}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectInput
              label={"Track"}
              icon={<Track sx={{ color: "red" }} />}
              value={"1"}
              handleChange={() => {}}
              options={[{ value: "1", label: "Laute" }]}
            />
          </Grid>
        </Grid>
      </Stack>

      <Top3Ranking />
    </Box>
  );
};

export default RankingByTimeCard;
