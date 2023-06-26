import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthType {
  display: boolean;
}

const initialState: AuthType = {
  display: false,
};

//STATE SLICES
//slice for user edit button

export const editNameButton = createSlice({
  name: "editNameButton",
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

//Export actions for edit button
export const { toggle } = editNameButton.actions;
