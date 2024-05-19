import React from "react";
import { Stack, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/usersSlice";
import { useGetUserByRacerIdQuery } from "../../store/slices/api/usersApiSlice";

const Stats = () => {
  // Selectors
  const user = useSelector(selectUser);

  // Queries
  const { data: racerData } = useGetUserByRacerIdQuery(
    {
      racerId: user?.racerId,
    },
    {
      skip: !user?.racerId,
    }
  );

  // Other variables
  const { racerStatistics } = racerData ?? {};
  const { drivenKms, drivenTimeMinutes } = racerStatistics ?? {};

  return (
    <Stack>
      <SectionHeaderCard
        icon={
          <EmojiEventsIcon
            sx={{
              zIndex: 1,
              width: "48px",
              height: "48px",
              marginTop: "8px",
              color: "white",
            }}
          />
        }
        title="Stats"
      />
      <Stack
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "8px" }}
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <SpeedIcon sx={{ color: "red", width: "36px", height: "36px" }} />
        <Typography sx={{ color: "white" }}>
          {drivenKms ?? 0} Driven KMs
        </Typography>
      </Stack>
      <Stack
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "8px" }}
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <AccessTimeIcon sx={{ color: "red", width: "36px", height: "36px" }} />
        <Typography sx={{ color: "white" }}>
          {drivenTimeMinutes ?? 0} Driven Time
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Stats;
