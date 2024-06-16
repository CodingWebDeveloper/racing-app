import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const KartCard = ({ kart }) => {
  const { engineCC, horsePower, kartNumber, kartPhoto, model } = kart;

  return (
    <Card sx={{ display: "flex", minHeight: "200px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", flex: "1 0 auto" }}
        >
          <Typography sx={{ flexGrow: 1 }} component="div" variant="h5">
            {model}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Engine: {engineCC ?? "N/A"}
          </Typography>
          <Divider flexItem orientation="vertical" />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Horsepower: {horsePower ?? "N/A"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Kart number: {kartNumber ?? "N/A"}
          </Typography>
        </CardContent>
      </Box>
      {kartPhoto ? (
        <CardMedia
          component="img"
          sx={{
            flexGrow: 1,
            padding: "16px",
            width: 151,
            objectFit: "contain",
            alignSelf: "center",
          }}
          image={kartPhoto}
          alt={model}
        />
      ) : (
        <Box
          sx={{
            width: "151",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageIcon fontSize="large" />
        </Box>
      )}
    </Card>
  );
};

export default KartCard;
