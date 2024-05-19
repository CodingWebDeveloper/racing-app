import {
  API_METHODS,
  USER_GET_BY_EMAIL_URL,
  USER_GET_BY_RACER_ID_URL,
  USER_LOGIN_URL,
  USER_REGISTER_URL,
} from "../../../utils/api-constants";
import { baseApiSlice } from "./baseApiSlice";

export const usersApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: ({ password, email }) => ({
        url: USER_LOGIN_URL,
        params: {
          email,
          password,
        },
      }),
    }),
    register: builder.mutation({
      query: (userInput) => ({
        url: USER_REGISTER_URL,
        method: API_METHODS.POST,
        body: userInput,
      }),
    }),
    getUserByRacerId: builder.query({
      query: ({ racerId }) => ({
        url: USER_GET_BY_RACER_ID_URL.replace(":racerId", racerId),
      }),
    }),
    getUserByEmail: builder.query({
      query: ({ email }) => ({
        url: USER_GET_BY_EMAIL_URL,
        params: {
          email,
        },
      }),
    }),
  }),
});

export const {
  useGetUserByEmailQuery,
  useGetUserByRacerIdQuery,
  useLoginQuery,
  useRegisterMutation,
} = usersApiSlice;
