import React, { useMemo, useState } from "react";
import {
  useCreateRaceMutation,
  useDeleteRaceMutation,
  useGetAllRacesQuery,
} from "../../store/slices/api/racesApiSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RaceFormDialog from "../race-form-dialog/RaceFormDialog";
import { validateRace } from "../../utils/validations";
import DeleteIcon from "@mui/icons-material/Delete";

const RacesTable = () => {
  // States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);

  // Mutations
  const [createRace] = useCreateRaceMutation();
  const [deleteRace] = useDeleteRaceMutation();

  // Queries
  const { data, isLoading } = useGetAllRacesQuery();

  // Handlers
  const handleCreateSubmit = async (raceInput) => {
    const isValid = validateRace(raceInput);
    if (!isValid) return;

    try {
      await createRace(raceInput).unwrap();
      handleClose();
    } catch (error) {}
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (raceId) => {
    try {
      await deleteRace({ raceId }).unwrap();
    } catch (error) {}
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Other variables
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;

  const visibleRows = useMemo(
    () => data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [data, page, rowsPerPage]
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Stack spacing={2}>
      <Box>
        <Button variant="contained" onClick={handleClickOpen}>
          <AddIcon /> Create Race
        </Button>
      </Box>
      {open && (
        <RaceFormDialog
          open={open}
          handleClose={handleClose}
          submitHandler={handleCreateSubmit}
          submitText="Create"
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Racer</TableCell>
              <TableCell align="right">Laps Count</TableCell>
              <TableCell align="right">Kart</TableCell>
              <TableCell align="right">Track</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((row) => {
              const { racer, laps, raceKart, track } = row;
              const racerName = `${racer.firstName} ${racer.lastName}`;
              const lapsCount = laps.length;
              const kartName = raceKart.model;
              const trackName = track.trackName;

              return (
                <TableRow
                  key={row.kartId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {racerName}
                  </TableCell>
                  <TableCell align="right">{lapsCount}</TableCell>
                  <TableCell align="right">{kartName}</TableCell>
                  <TableCell align="right">{trackName}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(row.raceId)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Stack>
  );
};

export default RacesTable;
