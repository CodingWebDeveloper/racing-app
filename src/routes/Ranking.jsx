import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import SelectInput from "../components/select-input/SelectInput";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import TimerIcon from "@mui/icons-material/Timer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrackIcon from "@mui/icons-material/Route";
import { useGetBestLastSessionQuery } from "../store/slices/api/rankingApiSlice";

const rows = [
  {
    position: 1,
    racerPhoto:
      "https://wallup.net/wp-content/uploads/2019/09/385645-go-kart-kart-race-racing-13-jpg.jpg",
    racerFirstName: "John",
    racerLastName: "Doe",
    raceDate: "2024-05-09",
    bestTime: "PT56.8635",
  },
  {
    position: 2,
    racerPhoto:
      "https://wallup.net/wp-content/uploads/2019/09/385645-go-kart-kart-race-racing-13-jpg.jpg",
    racerFirstName: "John",
    racerLastName: "Doe",
    raceDate: "2024-05-09",
    bestTime: "PT56.8635",
  },
  {
    position: 3,
    racerPhoto:
      "https://wallup.net/wp-content/uploads/2019/09/385645-go-kart-kart-race-racing-13-jpg.jpg",
    racerFirstName: "John",
    racerLastName: "Doe",
    raceDate: "2024-05-09",
    bestTime: "PT56.8635",
  },
];

const Ranking = () => {
  const { data, isLoading } = useGetBestLastSessionQuery();

  return (
    <>
      <Box sx={{ background: "black", padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <SelectInput
              label="Age"
              icon={<AccessibilityIcon sx={{ color: "red" }} />}
              value={"1"}
              handleChange={() => {}}
              options={[{ value: "1", label: "Laute" }]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SelectInput
              label="Year"
              icon={<TimerIcon sx={{ color: "red" }} />}
              value={"1"}
              handleChange={() => {}}
              options={[{ value: "1", label: "Laute" }]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SelectInput
              label="Country"
              icon={<LocationOnIcon sx={{ color: "red" }} />}
              value={"1"}
              handleChange={() => {}}
              options={[{ value: "1", label: "Laute" }]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SelectInput
              label="Track"
              icon={<TrackIcon sx={{ color: "red" }} />}
              value={"1"}
              handleChange={() => {}}
              options={[{ value: "1", label: "Laute" }]}
            />
          </Grid>
        </Grid>
      </Box>
      <TableContainer sx={{ background: "rgba(0, 0, 0, 0.8)" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                ".MuiTableCell-root": {
                  color: "#7a7a7a",
                },
              }}
            >
              <TableCell width="50px">Pos</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Race Date</TableCell>
              <TableCell>Best Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.position}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  ".MuiTableCell-root": {
                    color: "white",
                  },
                }}
              >
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      paddingInline: "8px",
                      position: "relative",
                      color: "black",
                      width: "fit-content",

                      "&:after": {
                        content: "''",
                        height: "100%",
                        width: "5px",
                        background: "red",
                        position: "absolute",
                        left: 0,
                        borderRadius: "8px 0px 0px 8px",
                      },
                    }}
                  >
                    {row.position}
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar src={row.racerPhoto} />
                    <Typography>
                      {`${row.racerFirstName} ${row.racerLastName}`}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>{row.raceDate}</TableCell>
                <TableCell>{row.bestTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" fullWidth>
        Load more results
      </Button>
    </>
  );
};

export default Ranking;
