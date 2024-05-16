import * as React from "react";
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
import { signInUser } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/usersSlice";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { API_METHODS, USER_LOGIN_URL } from "../utils/api-constants";

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://racing-app-amber.vercel.app/">
        Racer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginIn() {
  // General hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handlers
  const handleSubmit = async (event) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        USER_LOGIN_URL + `?email=${email}&password=${password}`,
        {
          method: API_METHODS.GET,
        }
      );
      const data = await response.json();

      if (data) {
        await signInUser(email, password);
        dispatch(setUser(data));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  if (isLoading) {
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
        <Typography sx={{ color: "white" }} component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
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
            value={email}
            onChange={handlerChangeEmail}
            autoComplete="email"
            autoFocus
            variant="outlined"
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlerChangePassword}
            autoComplete="current-password"
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
            variant="outlined"
            margin="normal"
            required
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
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/register">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
    </Container>
  );
}
