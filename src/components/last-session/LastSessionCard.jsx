import React, { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import Results from "@mui/icons-material/EmojiFlags";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";
import SessionCard from "../session-card/SessionCard";
import { useGetLastRaceQuery } from "../../store/slices/api/racesApiSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/usersSlice";
import LoadingSpinner from "../shared/LoadingSpinner";

const LastSessionCard = () => {
  // Selectors
  const user = useSelector(selectUser);
  const { data, isLoading } = useGetLastRaceQuery(
    { racerId: user?.racerId },
    { skip: !user?.racerId }
  );

  // States
  const [currentRaceId, setCurrentRaceId] = useState(null);

  // Handlers
  const handleSelect = (id) => {
    setCurrentRaceId(id);
  };

  if (isLoading || !data) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <SectionHeaderCard
        icon={
          <Results
            sx={{
              zIndex: 1,
              height: "48px",
              width: "48px",
              marginTop: "8px",
              color: "white",
            }}
          />
        }
        title="Last session"
      />
      <Box sx={{ background: "rgba(0, 0 ,0 , 0.8)", padding: 2 }}>
        <SessionCard
          session={data}
          currentRaceId={currentRaceId}
          handleSelect={handleSelect}
        />
      </Box>
    </Box>
  );
};

export default LastSessionCard;
