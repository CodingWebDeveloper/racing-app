import React from "react";
import AppDrawer from "../navigation/AppDrawer";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

const Root = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <Box>
      <AppDrawer>
        <Container>
          <Outlet />
        </Container>
      </AppDrawer>
    </Box>
  ) : (
    <Navigate to="/landing-page" />
  );
};

export default Root;
