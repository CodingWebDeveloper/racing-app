import { KeyboardArrowRight } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ResultItem = ({ ranking, user, updatedOn, time, active }) => {
  const { avatarUrl, firstName, lastName } = user;
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        padding: "8px",
        cursor: "pointer",
        boxShadow: active ? "0px 0px 2px 0px #007BF9" : "",
        background: active
          ? "linear-gradient(90deg, #007BF9 40%,  rgba(0,94,184,0) 75%)"
          : "",
      }}
    >
      <Grid item xs>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "50px",
              paddingInline: "8px",
              position: "relative",

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
        <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <KeyboardArrowRight sx={{ color: "white" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResultItem;
