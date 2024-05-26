import React, { useMemo, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoadingSpinner from "../shared/LoadingSpinner";
import { Box, Button, IconButton, Stack, TablePagination } from "@mui/material";
import {
  useCreateTrackMutation,
  useGetAllTracksQuery,
  useGetTrackIdQuery,
  useUpdateTrackMutation,
} from "../../store/slices/api/tracksApiSlice";
import TrackFormDialog from "../track-form-dialog/TrackFormDialog";
import { Add } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

import { validateTrack } from "../../utils/validations";

const TracksTable = () => {
  // States
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);

  // Mutations
  const [createTrack] = useCreateTrackMutation();
  const [updateTrack] = useUpdateTrackMutation();

  // Queries
  const { data, isLoading } = useGetAllTracksQuery();
  const { data: trackData } = useGetTrackIdQuery(
    {
      trackId: currentTrackId,
    },
    {
      skip: !currentTrackId,
    }
  );

  // Handlers
  const handleCreateTrack = async (trackInput) => {
    const isValid = validateTrack(trackInput);

    if (!isValid) return;

    try {
      await createTrack(trackInput).unwrap();
      handleClose();
    } catch (error) {}
  };

  const handleUpdateTrack = async (trackInput) => {
    const isValid = validateTrack(trackInput);

    if (!isValid) return;

    try {
      await updateTrack({ trackId: currentTrackId, trackInput }).unwrap();
      handleCloseEdit();
    } catch (error) {}
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (trackId) => {
    setCurrentTrackId(trackId);
    handleClickOpenEdit();
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
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
          <Add /> Create Track
        </Button>
      </Box>

      {open && (
        <TrackFormDialog
          open={open}
          handleClose={handleClose}
          submitHandler={handleCreateTrack}
          submitText="Create"
        />
      )}

      {openEdit && (
        <TrackFormDialog
          open={openEdit}
          handleClose={handleCloseEdit}
          submitHandler={handleUpdateTrack}
          submitText="Update"
          data={trackData}
        />
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Length(km)</TableCell>
              <TableCell align="right">Best Time</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((row) => (
              <TableRow
                key={row.trackId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.trackName}
                </TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.trackLengthKms}</TableCell>
                <TableCell align="right">{row.bestTrackTime}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(row.trackId)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
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

export default TracksTable;
