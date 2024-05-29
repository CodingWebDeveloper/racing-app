import {
  API_METHODS,
  DELETE_RACE_by_ID_URL,
  LAST_RACE_BY_RACER_ID_URL,
  RACES_BY_RACER_ID_URL,
  RACES_URL,
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
      }),
      providesTags: ["RACES"],
    }),
    getAllRaces: builder.query({
      query: () => ({
        url: RACES_URL,
      }),
      providesTags: ["RACES"],
    }),
    createRace: builder.mutation({
      query: (raceInput) => ({
        url: RACES_URL,
        body: raceInput,
        method: API_METHODS.POST,
      }),
      invalidatesTags: ["RACES"],
    }),
    deleteRace: builder.mutation({
      query: ({ raceId }) => ({
        url: DELETE_RACE_by_ID_URL.replace(":raceId", raceId),
        method: API_METHODS.DELETE,
      }),
      invalidatesTags: ["RACES"],
    }),
  }),
});

export const {
  useGetRacesByRacerIdQuery,
  useGetLastRaceQuery,
  useGetAllRacesQuery,
  useCreateRaceMutation,
  useDeleteRaceMutation,
} = racesApiSlice;
