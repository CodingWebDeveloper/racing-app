import { Box } from "@mui/material";
import React from "react";
import SectionHeaderCard from "../section-header-card/SectionHeaderCard";
import HexagonIcon from "@mui/icons-material/Hexagon";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const RankingByPointsCard = () => {
  return (
    <Box>
      <SectionHeaderCard
        icon={
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HexagonIcon
              sx={{
                color: "red",
                width: "48px",
                height: "48px",
                marginTop: "8px",
              }}
            />

            <DoubleArrowIcon
              sx={{
                color: "white",
                position: "absolute",
                transform: "rotateZ(-90deg)",
              }}
            />
          </Box>
        }
      />
    </Box>
  );
};

export default RankingByPointsCard;
