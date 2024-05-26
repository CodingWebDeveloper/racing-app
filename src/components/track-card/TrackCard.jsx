import React from "react";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const TrackCard = ({ track }) => {
  const { trackName, city, trackLengthKms, bestTrackTime } = track;

  return (
    <Card
      sx={{
        display: "flex",
        gap: 3,
        padding: 2,
      }}
    >
      <Stack spacing={1}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {trackName}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PlaceIcon color="primary" />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {city}
            </Typography>
          </Stack>
          <Typography variant="caption">{`Best Track Time: ${bestTrackTime}`}</Typography>
          <Divider sx={{ backgroundColor: "gray" }} />
        </CardContent>
        <Chip label={`Length: ${trackLengthKms}km`} variant="outlined" />
      </Stack>
    </Card>
  );
};

export default TrackCard;
