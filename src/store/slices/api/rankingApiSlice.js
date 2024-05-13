import { RANKING_BEST_SESSION_URL } from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const rankingApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBestLastSession: builder.query({
      query: ({ trackId, kartId, racerId }) => ({
        url: RANKING_BEST_SESSION_URL,
        params: {
          trackId,
          kartId,
          racerId,
        },
      }),
      providesTags: ["RANKING"],
    }),
  }),
});

export const { useGetBestLastSessionQuery } = rankingApiSlice;
