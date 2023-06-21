import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

//SRC
//https://redux-toolkit.js.org/rtk-query/usage-with-typescript#createapi
export const useArgentBankAPI = createApi({
  reducerPath: "bankApiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        //https://swagger.io/docs/specification/authentication/bearer-authentication/
        //The name “Bearer authentication” can be understood as “give access to the bearer of this token.”
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `user/login`,
        method: "POST",
        body: { email, password },
      }),
    }),
    //MUTATION DOC:
    //https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#usemutation
    //https://redux-toolkit.js.org/rtk-query/usage/mutations
    signUpUser: builder.mutation({
      query: ({email, password, firstName, lastName}) => ({
        url: `user/signup`,
        method: "POST",
        body: { email, password, firstName, lastName },
      }),
    }),
    getProfile: builder.mutation({
      query: () => ({
        url: `user/profile`,
        method: "POST",
      }),
    }),
    setProfile: builder.mutation({
      query: ({ firstName, lastName }) => ({
        url: `user/profile`,
        method: "PUT",
        body: { firstName, lastName },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignUpUserMutation,
  useGetProfileMutation,
  useSetProfileMutation,
} = useArgentBankAPI;
