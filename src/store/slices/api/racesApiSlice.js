import {
  LAST_RACE_BY_RACER_ID_URL,
  RACES_BY_RACER_ID_URL,
} from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const racesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRacesByRacerId: builder.query({
      query: ({ racerId }) => ({
        url: RACES_BY_RACER_ID_URL.replace(":racerId", racerId),
      }),
      providesTags: ["RACES"],
    }),
    getLastRace: builder.query({
      query: ({ racerId }) => ({
        url: LAST_RACE_BY_RACER_ID_URL.replace(":racerId", racerId),
        providesTags: ["RACES"],
      }),
    }),
  }),
});

export const { useGetRacesByRacerIdQuery, useGetLastRaceQuery } = racesApiSlice;
