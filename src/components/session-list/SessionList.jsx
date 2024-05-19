import { Stack } from "@mui/material";
import React, { useState } from "react";
import SessionCard from "../session-card/SessionCard";
import { useGetRacesByRacerIdQuery } from "../../store/slices/api/racesApiSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/usersSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import { selectKart, selectTrack } from "../../store/slices/raceFilterSlice";

const SessionList = () => {
  // Selectors
  const user = useSelector(selectUser);

  // Selectors
  const track = useSelector(selectTrack);
  const kart = useSelector(selectKart);

  // States
  const [currentRaceId, setCurrentRaceId] = useState(null);

  // Queries
  const { data: racesData, isLoading } = useGetRacesByRacerIdQuery(
    {
      racerId: user?.racerId,
    },
    { skip: !user?.racerId }
  );

  // Handlers
  const handleSelect = (id) => {
    setCurrentRaceId(id);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const filteredRaces =
    racesData?.filter((race) => {
      const { raceKart, track } = race;
      const filterByKart = kart ? raceKart.kartId === kart : true;
      const filterByTrack = track ? track.trackId === track : true;
      return filterByKart || filterByTrack;
    }) ?? [];

  return (
    <Stack spacing={3}>
      {filteredRaces.map((session) => {
        return (
          <SessionCard
            key={session.raceId}
            session={session}
            currentRaceId={currentRaceId}
            handleSelect={handleSelect}
          />
        );
      })}
    </Stack>
  );
};

export default SessionList;
