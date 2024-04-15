import { Box } from "@mui/material";
import React from "react";
import ResultItem from "../result-item/ResultItem";

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
      {results.map((result) => (
        <ResultItem {...result} />
      ))}
    </Box>
  );
};

export default ResultList;
