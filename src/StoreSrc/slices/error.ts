import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthType {
  error: string;
}

const initialState: AuthType = {
  error: "",
};

//STATE SLICES
//slice for error store
export const error = createSlice({
  name: "error",
  initialState,
  reducers: {
    storeError: (state, action) => {
      state.error = action.payload.error;
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

//Export actions for error
export const { storeError } = error.actions;
