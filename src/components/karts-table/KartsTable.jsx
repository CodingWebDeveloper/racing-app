import React, { useMemo, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useCreateKartMutation,
  useGetAllKartsQuery,
  useGetKartByIdQuery,
  useUpdateKartMutation,
} from "../../store/slices/api/kartsApiSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import KartFormDialog from "../kart-form-dialog/KartFormDialog";
import { Box, Button, IconButton, Stack, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { validateKart } from "../../utils/validations";
import { Add } from "@mui/icons-material";

const KartsTable = () => {
  // States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentKartId, setCurrentKartId] = useState(null);

  // Queries
  const { data, isLoading: isLoadingKarts } = useGetAllKartsQuery();

  const { data: kartData } = useGetKartByIdQuery(
    {
      kartId: currentKartId,
    },
    {
      skip: !currentKartId,
    }
  );

  // Mutations
  const [createKart] = useCreateKartMutation();
  const [updateKart] = useUpdateKartMutation();

  // Handlers
  const handleCreateSubmit = async (kartInput) => {
    const isValid = validateKart(kartInput);
    if (!isValid) {
      return;
    }

    try {
      await createKart({
        model: kartInput.model,
        horsePower: Number(kartInput.horsePower),
        kartNumber: Number(kartInput.kartNumber),
        engineCC: Number(kartInput.engineCC),
        kartPhoto: kartInput.kartPhoto,
      }).unwrap();

      handleClose();
    } catch (error) {}
  };

  const handleUpdateSubmit = async (kartInput) => {
    const isValid = validateKart(kartInput);
    if (!isValid) {
      return;
    }

    try {
      await updateKart({
        kartId: currentKartId,
        kartInput: {
          model: kartInput.model,
          horsePower: Number(kartInput.horsePower),
          kartNumber: Number(kartInput.kartNumber),
          engineCC: Number(kartInput.engineCC),
          kartPhoto: kartInput.kartPhoto,
        },
      }).unwrap();

      handleCloseEdit();
    } catch (error) {}
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (kartId) => {
    setCurrentKartId(kartId);
    handleClickOpenEdit();
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
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

  if (isLoadingKarts) {
    return <LoadingSpinner />;
  }

  return (
    <Stack spacing={2}>
      <Box>
        <Button variant="contained" onClick={handleClickOpen}>
          <Add /> Create Kart
        </Button>
      </Box>
      {open && (
        <KartFormDialog
          open={open}
          handleClose={handleClose}
          submitHandler={handleCreateSubmit}
          submitText="Create"
        />
      )}
      {openEdit && (
        <KartFormDialog
          open={openEdit}
          handleClose={handleCloseEdit}
          submitHandler={handleUpdateSubmit}
          submitText="Update"
          data={kartData}
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Model</TableCell>
              <TableCell align="right">Horsepower</TableCell>
              <TableCell align="right">KartNumber</TableCell>
              <TableCell align="right">EngineCC</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((row) => (
              <TableRow
                key={row.kartId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.model}
                </TableCell>
                <TableCell align="right">{row.horsePower}</TableCell>
                <TableCell align="right">{row.kartNumber}</TableCell>
                <TableCell align="right">{row.engineCC}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(row.kartId)}
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

export default KartsTable;
