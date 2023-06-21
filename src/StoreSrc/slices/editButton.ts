import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthType {
  display: boolean;
}

const initialState: AuthType = {
  display: false,
};

//slice for user edit button

export const editButton = createSlice({
  name: "editButton",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.display = !state.display;
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
