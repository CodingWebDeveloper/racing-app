import React from "react";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";
import { Box, Stack, Grid, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HexagonIcon from "@mui/icons-material/Hexagon";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";

const FriendsOnline = () => {
  return (
    <Stack>
      <SectionHeaderCard
        icon={
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
                width: "48px",
                height: "48px",
                marginTop: "8px",
              }}
            />
            <GroupIcon sx={{ position: "absolute", color: "white" }} />
          </Box>
        }
        title="Friends Online"
      />
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <Grid
          container
          sx={{
            width: "100%",
            padding: "16px",
          }}
          spacing={2}
        >
          <Grid item>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {}}
            >
              <HexagonIcon
                sx={{ color: "red", width: "56px", height: "56px" }}
              />
              <GroupAddIcon sx={{ color: "white", position: "absolute" }} />
            </Box>
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Click here to find your friends
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default FriendsOnline;
