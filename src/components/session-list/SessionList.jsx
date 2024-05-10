import { Stack } from "@mui/material";
import React from "react";
import SessionCard from "../session-card/SessionCard";
const SESSIONS = [
  {
    place: 2,
    total: 2,
    name: "Erkan kamber",
    bestLapTime: "00:59.673",
    createdOn: "12.04.2024 20:23",
    location: "Lauta Karting",
    kart: "SR5",
  },
  {
    place: 4,
    total: 14,
    name: "Erkan kamber",
    bestLapTime: "01:02.510",
    createdOn: "05.04.2024 20:23",
    location: "Lauta Karting",
    kart: "SR5",
  },
];
const SessionList = () => {
  return (
    <Stack spacing={3}>
      {SESSIONS.map((session) => {
        return <SessionCard session={session} />;
      })}
    </Stack>
  );
};

export default SessionList;
