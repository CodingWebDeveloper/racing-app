import {
  API_METHODS,
  KARTS_CREATE_URL,
  KARTS_GET_ALL_URL,
  KARTS_GET_BY_ID,
} from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const kartsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllKarts: builder.query({
      query: () => ({
        url: KARTS_GET_ALL_URL,
      }),
      providesTags: ["KARTS"],
    }),
    getKartById: builder.query({
      query: ({ kartId }) => ({
        url: KARTS_GET_BY_ID.replace(":kartId", kartId),
      }),
    }),
    createKart: builder.mutation({
      query: (kartInput) => ({
        url: KARTS_CREATE_URL,
        body: kartInput,
        method: API_METHODS.POST,
      }),
      invalidatesTags: ["KARTS"],
    }),
    updateKart: builder.mutation({
      query: ({ kartId, kartInput }) => ({
        url: KARTS_GET_BY_ID.replace(":kartId", kartId),
        method: API_METHODS.PATCH,
        body: kartInput,
      }),
      invalidatesTags: ["KARTS"],
    }),
  }),
});

export const {
  useGetAllKartsQuery,
  useGetKartByIdQuery,
  useCreateKartMutation,
  useUpdateKartMutation,
} = kartsApiSlice;
