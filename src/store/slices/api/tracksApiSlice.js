import { TRACKS_PREFERRED_URL } from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const tracksApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPreferredTrack: builder.query({
      query: ({ racerId }) => ({
        url: TRACKS_PREFERRED_URL.replace(":racerId", racerId),
      }),
      providesTags: ["TRACKS"],
    }),
  }),
});

export const { useGetPreferredTrackQuery } = tracksApiSlice;
