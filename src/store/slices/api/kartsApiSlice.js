import { KARTS_GET_ALL_URL } from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const kartsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllKarts: builder.query({
      query: () => ({
        url: KARTS_GET_ALL_URL,
      }),
    }),
  }),
});

export const { useGetAllKartsQuery } = kartsApiSlice;
