import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthType {
  token: string;
  userIsLogged: boolean;
}

const initialState: AuthType = {
  token: "",
  userIsLogged: false,
};

//slice for user authentication
export const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload.token;
      state.userIsLogged = action.payload.userIsLogged;
    },
    Purge: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});
