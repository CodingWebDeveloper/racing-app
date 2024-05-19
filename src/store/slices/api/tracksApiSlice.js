import {
  TRACKS_GET_ALL_URL,
  TRACKS_PREFERRED_URL,
} from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const tracksApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPreferredTrack: builder.query({
      query: ({ racerId }) => ({
        url: TRACKS_PREFERRED_URL.replace(":racerId", racerId),
      }),
      providesTags: ["TRACKS"],
    }),
    getAllTracks: builder.query({
      query: () => ({
        url: TRACKS_GET_ALL_URL,
      }),
    }),
  }),
});

export const { useGetAllTracksQuery, useGetPreferredTrackQuery } =
  tracksApiSlice;
