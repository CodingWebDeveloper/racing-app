import React from "react";
import AppDrawer from "../navigation/AppDrawer";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

const Root = () => {
  return (
    <Box>
      <AppDrawer>
        <Container>
          <Outlet />
        </Container>
      </AppDrawer>
    </Box>
  );
};

export default Root;
