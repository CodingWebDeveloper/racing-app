import React from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import DatePicker from "react-date-picker";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import SelectInput from "../components/select-input/SelectInput";

const EditProfile = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, .8)", width: "90%" }}>
      <Box sx={{ backgroundColor: "black", padding: "8px" }}>
        <Typography sx={{ color: "white" }}>Basic Information</Typography>
      </Box>
      <Stack sx={{ padding: "16px" }} rowGap={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Box
              sx={{
                border: "3px solid #C9C4C2",
                height: "136px",
                width: "136px",
                backgroundColor: "#CFCFCF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <SportsMotorsportsIcon
                sx={{ width: "63px", height: "63px", color: "#919191" }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ marginTop: "16px", textTransform: "unset", width: "136px" }}
            >
              Change Image
            </Button>
          </Grid>
          <Grid item xs>
            <Grid container spacing={2} sx={{ marginBottom: "16px" }}>
              <Grid item xs={6}>
                <TextField
                  size="small"
                  sx={{ backgroundColor: "white", borderRadius: "4px" }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  size="small"
                  sx={{ backgroundColor: "white", borderRadius: "4px" }}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <DatePicker onChange={() => {}} value={null} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SelectInput
              icon={<></>}
              value={"Singapore"}
              handleChange={() => {}}
              options={[{ value: "Singapore", label: "Singapore" }]}
              placeholder="Favorite Track"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "4px" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <SelectInput
              icon={<></>}
              value={"Bulgaria"}
              handleChange={() => {}}
              options={[{ value: "Bulgaria", label: "Bulgaria" }]}
              placeholder="Country"
            />
          </Grid>
          <Grid item xs={6}>
            <SelectInput
              placeholder="City"
              icon={<></>}
              value={"Plovdiv"}
              handleChange={() => {}}
              options={[{ value: "Plovdiv", label: "Plovdiv" }]}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ maxWidth: "320px", width: "100%" }}
          >
            Save
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default EditProfile;
