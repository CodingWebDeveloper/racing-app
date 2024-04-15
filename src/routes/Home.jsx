import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import DriverProgress from "../components/driver-progress/DriverProgress";

import LastSessionCard from "../components/last-session/LastSessionCard";

import Stats from "../components/stats/Stats";
import ProfileCard from "../components/profile-card/ProfileCard";
import RankingByTimeCard from "../components/ranking-by-time-card/RankingByTimeCard";
import FriendsOnline from "../components/friends-online/FriendsOnline";
import ResultList from "../components/result-list/ResultList";

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Stack rowGap={3}>
          <DriverProgress />
          <ProfileCard />
          <LastSessionCard />
          <RankingByTimeCard />
          <ResultList />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stats />
        <FriendsOnline />
      </Grid>
    </Grid>
  );
};

export default Home;
