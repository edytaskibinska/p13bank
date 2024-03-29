import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface LoginUserArgs {
  email: string;
  password: string;
}

export interface SignUpUserArgs {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginUserResult {
  token: string; // Le token d'authentification renvoyé par le serveur
  expiresIn: number;
  email: string;
  password: string;
}

export interface SignUpUserResult {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Redux Toolkit Query,
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
    //Mutation endpoints are defined by returning an object inside the endpoints section of createApi,
    //and defining the fields using the build.mutation() method.
    //https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced
    loginUser: builder.mutation<LoginUserResult, LoginUserArgs>({
      query: ({ email, password }) => ({
        url: `user/login`,
        method: "POST",
        body: { email, password },
      }),
    }),
    //MUTATION DOC:
    //https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#usemutation
    //https://redux-toolkit.js.org/rtk-query/usage/mutations
    //change/update signUpUser field
    signUpUser: builder.mutation<SignUpUserResult, SignUpUserArgs>({
      query: ({ email, password, firstName, lastName }) => ({
        url: `user/signup`,
        method: "POST",
        body: { email, password, firstName, lastName },
      }),
    }),
    getProfile: builder.mutation<SignUpUserResult, SignUpUserArgs>({
      query: () => ({
        url: `user/profile`,
        method: "POST",
      }),
    }),
    setProfile: builder.mutation<SignUpUserResult, SignUpUserArgs>({
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
