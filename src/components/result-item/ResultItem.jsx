import { KeyboardArrowRight } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ResultItem = ({ ranking, user, updatedOn, time }) => {
  const { avatarUrl, firstName, lastName } = user;
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      sx={{ padding: "8px", cursor: "pointer" }}
    >
      <Grid item xs>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "50px",
              paddingInline: "8px",
            }}
          >
            {ranking}
          </Box>
          <Avatar src={avatarUrl} />
          <Typography
            sx={{ color: "white" }}
          >{`${firstName} ${lastName}`}</Typography>
        </Stack>
      </Grid>
      <Grid item xs>
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ color: "white" }}>{updatedOn}</Typography>
          <Typography sx={{ color: "white" }}>{time}</Typography>
        </Stack>
      </Grid>
      <Grid item>
        <KeyboardArrowRight sx={{ color: "white" }} />
      </Grid>
    </Grid>
  );
};

export default ResultItem;
