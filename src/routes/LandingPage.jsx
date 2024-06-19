import { Backdrop, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/copyright/Copyright";

const LandingPage = () => {
  //General hooks
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handlerNavigateRegister = () => {
    navigate("/register");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        data-src="./landing-page-background.jpg"
        style={{
          zIndex: -1,
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        alt="background"
        src="./landing-page-background.jpg"
        loading="lazy"
      />
      <Backdrop sx={{ color: "#fff", zIndex: 0 }} open={true}></Backdrop>
      <Stack sx={{ gridRow: "2/3", zIndex: 1 }} spacing={2}>
        <Typography
          sx={{
            color: "white",
            textShadow: "text-shadow: 2px 2px 4px #000000",
          }}
          variant="h3"
          align="center"
          fontWeight="bolder"
        >
          Welcome to Racing App
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "white",
            textShadow: "text-shadow: 2px 2px 4px #000000",
          }}
        >
          Join the Ultimate Racing Experience!
        </Typography>
        <Stack
          direction="row"
          gap={2}
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            color="error"
            onClick={handleNavigateLogin}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handlerNavigateRegister}
          >
            Register
          </Button>
        </Stack>
      </Stack>
      <Copyright sx={{ gridRow: "3/4", zIndex: 1 }} />
    </Box>
  );
};

export default LandingPage;
