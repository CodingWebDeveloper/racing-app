import {
  Avatar,
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SelectInput from "../components/select-input/SelectInput";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrackIcon from "@mui/icons-material/Route";
import { useGetRankingQuery } from "../store/slices/api/rankingApiSlice";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/usersSlice";
import { useGetAllTracksQuery } from "../store/slices/api/tracksApiSlice";
import { useGetAllKartsQuery } from "../store/slices/api/kartsApiSlice";

const Ranking = () => {
  // Selectors
  const user = useSelector(selectUser);

  // States
  const [filter, setFilter] = useState({ trackId: null, kartId: null });

  // Queries
  console.log({
    racerId: user?.racerId,
    trackId: filter.trackId,
    kartId: filter.kartId,
  });
  const { data, isLoading } = useGetRankingQuery(
    {
      racerId: user?.racerId,
      trackId: filter.trackId,
      kartId: filter.kartId,
    },
    {
      skip: !user?.racerId,
    }
  );
  const { data: allTracksData } = useGetAllTracksQuery();
  const { data: allKartsData } = useGetAllKartsQuery();

  // Handlers
  const handleChangeKart = (event) => {
    const newKart = event.target.value;
    setFilter({ ...filter, kartId: newKart });
  };

  const handleChangeTrack = (event) => {
    const newTrack = event.target.value;
    setFilter({ ...filter, trackId: newTrack });
  };

  // Other variables
  const trackOptions =
    allTracksData?.map((track) => ({
      label: track.trackName,
      value: track.trackId,
    })) ?? [];

  const kartOptions =
    allKartsData?.map((kart) => ({
      label: kart.model,
      value: kart.kartId,
    })) ?? [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Box sx={{ background: "black", padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <SelectInput
              label="Kart"
              icon={<LocationOnIcon sx={{ color: "red" }} />}
              value={filter.kartId}
              handleChange={handleChangeKart}
              options={kartOptions}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SelectInput
              label="Track"
              icon={<TrackIcon sx={{ color: "red" }} />}
              value={filter.trackId}
              handleChange={handleChangeTrack}
              options={trackOptions}
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
            {data?.map((row) => {
              const {
                position,
                racerPhoto,
                racerFirstName,
                racerLastName,
                raceDate,
                bestTime,
              } = row;
              const name = `${racerFirstName} ${racerLastName}`;

              return (
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
                      {position}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={racerPhoto} />
                      <Typography>{name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{raceDate}</TableCell>
                  <TableCell>{bestTime}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Ranking;
