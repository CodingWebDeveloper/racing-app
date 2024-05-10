import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import NearMeIcon from "@mui/icons-material/NearMe";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TrackCard = ({ track }) => {
  const { src, name, location } = track;

  return (
    <Card
      sx={{
        display: "flex",
        gap: 3,
        padding: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={src}
        alt="Live from space album cover"
      />
      <Stack spacing={2}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PlaceIcon color="primary" />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {location}
            </Typography>
          </Stack>
        </CardContent>
        <Divider sx={{ backgroundColor: "gray" }} />
        <Button variant="text">
          <NearMeIcon color="primary" />
          <Typography sx={{ textTransform: "none", color: "black" }}>
            Get directions
          </Typography>
          <KeyboardArrowRightIcon sx={{ color: "black" }} />
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ pl: 1, pb: 1 }}
        ></Stack>
      </Stack>
    </Card>
  );
};

export default TrackCard;
