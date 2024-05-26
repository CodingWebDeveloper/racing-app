import {
  API_METHODS,
  CREATE_TRACK_URL,
  TRACKS_GET_ALL_URL,
  TRACKS_GET_BY_ID_URL,
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
      providesTags: ["TRACKS"],
    }),
    getTrackId: builder.query({
      query: ({ trackId }) => ({
        url: TRACKS_GET_BY_ID_URL.replace(":trackId", trackId),
      }),
      providesTags: ["TRACKS"],
    }),
    createTrack: builder.mutation({
      query: (trackInput) => ({
        url: CREATE_TRACK_URL,
        method: API_METHODS.POST,
        body: trackInput,
      }),
      invalidatesTags: ["TRACKS"],
    }),
    updateTrack: builder.mutation({
      query: ({ trackId, trackInput }) => ({
        url: TRACKS_GET_BY_ID_URL.replace(":trackId", trackId),
        method: API_METHODS.PATCH,
        body: trackInput,
      }),
      invalidatesTags: ["TRACKS"],
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetPreferredTrackQuery,
  useGetTrackIdQuery,
  useCreateTrackMutation,
  useUpdateTrackMutation,
} = tracksApiSlice;
