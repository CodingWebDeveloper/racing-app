import * as React from "react";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createUser } from "../utils/firebase";
import { setUser } from "../store/slices/usersSlice";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../store/slices/api/usersApiSlice";
import { validateRegister } from "../utils/validations";
import LoadingSpinner from "../components/shared/LoadingSpinner";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://racing-app-amber.vercel.app/">
        NewsLinker
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Register() {
  // General hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mutations
  const [
    registerUser,
    { isLoading: isLoadingRegister, isSuccess: isSuccessRegister },
  ] = useRegisterMutation();

  // States
  const [error, setError] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);

  // Handlers
  const handleSubmit = async (event) => {
    const evaluatedError = validateRegister({
      firstName,
      lastName,
      city,
      email,
      password,
    });

    const isValid = Object.keys(evaluatedError).length === 0;
    setError(evaluatedError);
    setIsFirstSubmitted(true);

    if (!isValid) {
      return;
    }

    try {
      const response = await registerUser({
        firstName,
        lastName,
        ageRange: "25-35",
        city,
        email,
        password,
        photo: " ",
      }).unwrap();
      await createUser(email, password);

      dispatch(setUser(response));
      navigate("/");
    } catch (e) {}
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  if (isLoadingRegister || isSuccessRegister) {
    return <LoadingSpinner />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          background: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "white" }}>
          Register
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            sx={{
              position: "relative",
              width: "100%",
              background: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                background: "#fff",
                paddingLeft: 1,
                paddingRight: 1,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="First Name"
            name="first-name"
            value={firstName}
            onChange={handleChangeFirstName}
            autoFocus
            error={isFirstSubmitted && error.firstName}
            helperText={
              isFirstSubmitted && error.firstName ? error.firstName : ""
            }
          />
          <TextField
            sx={{
              position: "relative",
              width: "100%",
              background: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                background: "#fff",
                paddingLeft: 1,
                paddingRight: 1,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last Name"
            name="last-name"
            value={lastName}
            onChange={handleChangeLastName}
            autoFocus
            error={isFirstSubmitted && error.lastName}
            helperText={
              isFirstSubmitted && error.lastName ? error.lastName : ""
            }
          />
          <TextField
            sx={{
              position: "relative",
              width: "100%",
              background: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                background: "#fff",
                paddingLeft: 1,
                paddingRight: 1,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            value={city}
            onChange={handleChangeCity}
            autoFocus
            error={isFirstSubmitted && error.city}
            helperText={isFirstSubmitted && error.city ? error.city : ""}
          />
          <TextField
            sx={{
              position: "relative",
              width: "100%",
              background: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                background: "#fff",
                paddingLeft: 1,
                paddingRight: 1,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleChangeEmail}
            autoFocus
            error={isFirstSubmitted && error?.email}
            helperText={isFirstSubmitted && error?.email ? error.email : ""}
          />
          <TextField
            sx={{
              position: "relative",
              width: "100%",
              background: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                background: "#fff",
                paddingLeft: 1,
                paddingRight: 1,
              },
            }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlerChangePassword}
            autoComplete="current-password"
            error={isFirstSubmitted && error.password}
            helperText={
              isFirstSubmitted && error.password ? error.password : ""
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" sx={{ color: "white" }} />}
            sx={{
              ".MuiTypography-root": {
                color: "white",
              },
            }}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/login">{"I have an account? Log in"}</NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
