import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../utils/api-constants";

export const baseApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  tagTypes: ["TRACKS", "RANKING"],
  endpoints: () => ({}),
});
