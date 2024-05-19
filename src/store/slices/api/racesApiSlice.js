import { RACES_BY_RACER_ID_URL } from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const racesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRacesByRacerId: builder.query({
      query: ({ racerId }) => ({
        url: RACES_BY_RACER_ID_URL.replace(":racerId", racerId),
      }),
      providesTags: ["RACES"],
    }),
  }),
});

export const { useGetRacesByRacerIdQuery } = racesApiSlice;
