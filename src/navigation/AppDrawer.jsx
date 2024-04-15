import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SettingsIcon from "@mui/icons-material/Settings";
import Tracks from "@mui/icons-material/Route";
import DrawerContent from "./DrawerContent";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "40%",
    minWidth: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AppDrawer = (props) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Grid container alignItems="center">
            <Grid item width={drawerWidth - 40}>
              <Typography>LOGO</Typography>
            </Grid>
            <Grid item xs>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item xs={2}>
              <Stack direction="row" spacing={1}>
                <Button color="inherit">
                  <Tracks sx={{ marginRight: "8px" }} />
                  <Typography>Tracks</Typography>
                </Button>
                <Button color="inherit">Home</Button>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row">
                <IconButton>
                  <LocalPoliceIcon sx={{ color: "white", fill: "red" }} />
                </IconButton>
                <IconButton>
                  <SettingsIcon sx={{ color: "white" }} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            background: "rgba(0, 0, 0, 0.8)",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open
      >
        <DrawerContent />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AppDrawer;
