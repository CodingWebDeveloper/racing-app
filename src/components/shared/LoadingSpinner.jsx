import React from "react";
import { Box } from "@mui/material";
import { FadeLoader } from "react-spinners";

const override = {
  display: "block",
};

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        inset: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <FadeLoader
        color="#1976d2"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default LoadingSpinner;
