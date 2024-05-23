import { GET_RANKING_URL } from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const rankingApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRankings: builder.query({
      query: ({ trackId, kartId, racerId }) => ({
        url: GET_RANKING_URL,
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

export const { useGetRankingsQuery } = rankingApiSlice;
