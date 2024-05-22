import React from "react";
import { Typography, Stack } from "@mui/material";
import Results from "@mui/icons-material/EmojiFlags";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";

const LastSessionCard = () => {
  return (
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
      end={
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              zIndex: 1,
              flexGrow: 1,
              marginLeft: "32px !important",
            }}
          ></Typography>
        </Stack>
      }
    />
  );
};

export default LastSessionCard;
