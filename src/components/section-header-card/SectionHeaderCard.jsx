import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";

const SectionHeaderCard = ({ icon, title, end }) => {
  return (
    <Grid
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      container
    >
      <Grid
        item
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        {icon}
        <Box
          sx={{
            borderTop: "48px solid red",
            borderRight: "24px solid transparent",
            position: "absolute",
            inset: "0",
            zIndex: -1,
            width: "64px",
            top: "12%",
          }}
        ></Box>
      </Grid>
      <Grid item xs sx={{ position: "relative" }}>
        <Stack direction="row">
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              zIndex: 1,
              flexGrow: 1,
              marginTop: "6px",
              marginLeft: "32px !important",
            }}
          >
            {title}
          </Typography>
          {end}
        </Stack>
        <Box
          sx={{
            borderBottom: "48px solid #1D1D1D",
            borderLeft: "24px solid transparent",
            position: "absolute",
            inset: "0",
            zIndex: -1,
            width: "100%",
            top: "-25%",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default SectionHeaderCard;
