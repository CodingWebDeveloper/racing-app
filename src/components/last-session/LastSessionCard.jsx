import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import Results from "@mui/icons-material/EmojiFlags";
import ShareIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
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
          <Button
            sx={{ padding: "0px", textTransform: "unset" }}
            variant="contained"
          >
            Share
            <ShareIcon sx={{ transform: "rotateY(180deg)" }} fontSize="small" />
          </Button>
          <CloseIcon sx={{ color: "white" }} />
        </Stack>
      }
    />
  );
};

export default LastSessionCard;
