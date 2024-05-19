import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const LapItem = ({ index, lap }) => {
  const { lapTime, lapDate } = lap;

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        padding: "8px",
        cursor: "pointer",
      }}
    >
      <Grid item>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            paddingInline: "8px",
            position: "relative",
            width: "100%",
            "&:after": {
              content: "''",
              height: "100%",
              width: "5px",
              background: "red",
              position: "absolute",
              left: 0,
              borderRadius: "8px 0px 0px 8px",
            },
          }}
        >
          {index}
        </Box>
      </Grid>
      <Grid item xs>
        <Typography sx={{ color: "white" }}>{lapTime}</Typography>
      </Grid>
      <Grid item xs>
        <Typography sx={{ color: "white" }}>{lapDate}</Typography>
      </Grid>
    </Grid>
  );
};

export default LapItem;
