import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import Top3Ranking from "../top3-ranking/Top3Ranking";
import RankIcon from "@mui/icons-material/Stars";
import SelectInput from "../select-input/SelectInput";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
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
      />
      <Stack sx={{ backgroundColor: "black", padding: "16px" }} spacing={1}>
        <Grid container columnSpacing={1}>
          <Grid item xs={6}>
            <SelectInput
              label={"Car model"}
              icon={<DirectionsCarIcon sx={{ color: "red" }} />}
              value={"SR5"}
              handleChange={() => {}}
              options={[{ value: "SR5", label: "SR5" }]}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectInput
              label={"Track"}
              icon={<Track sx={{ color: "red" }} />}
              value={"1"}
              handleChange={() => {}}
              options={[{ value: "1", label: "Laute12" }]}
            />
          </Grid>
        </Grid>
      </Stack>

      <Top3Ranking />
    </Box>
  );
};

export default RankingByTimeCard;
