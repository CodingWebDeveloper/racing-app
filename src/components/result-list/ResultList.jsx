import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ResultItem from "../result-item/ResultItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const results = [
  {
    ranking: 1,
    user: { avatarUrl: "", firstName: "Joe", lastName: "Rogan" },
    updatedOn: "10.05.2024",
    time: "1.20.34",
  },
  {
    ranking: 1,
    user: { avatarUrl: "", firstName: "Joe", lastName: "Rogan" },
    updatedOn: "10.05.2024",
    time: "1.20.34",
  },
  {
    ranking: 1,
    user: { avatarUrl: "", firstName: "Joe", lastName: "Rogan" },
    updatedOn: "10.05.2024",
    time: "1.20.34",
  },
];
const ResultList = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          paddingBlock: "8px",
          alignItems: "center",
        }}
      >
        <Grid item xs>
          <Button
            fullWidth
            sx={{ borderRadius: "0px 8px 8px 0px", padding: "4px" }}
            variant="contained"
          >
            Next results <KeyboardArrowDownIcon />
          </Button>
        </Grid>
        <Grid item xs>
          <Typography sx={{ color: "white", textAlign: "center" }}>
            or
          </Typography>
        </Grid>
        <Grid item xs>
          <Button
            fullWidth
            sx={{ borderRadius: "8px 0px 0px 8px", padding: "4px" }}
            variant="contained"
          >
            Previous results <KeyboardArrowUpIcon />
          </Button>
        </Grid>
      </Grid>
      {results.map((result, index) => (
        <ResultItem key={result.id} {...result} active={index === 2} />
      ))}
      <Button
        fullWidth
        variant="contained"
        sx={{ textTransform: "unset", borderRadius: "unset" }}
      >
        View track results
      </Button>
    </Box>
  );
};

export default ResultList;
