import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthType {
  token: string;
  isLog: boolean;
}

const initialState: AuthType = {
  token: "",
  isLog: false,
};
//STATE SLICES
//slice for user authentication
//reducer par cas d'usage
export const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload.token;
      state.isLog = action.payload.isLog;
    },
    Purge: (state, action) => {
      return initialState;
    },
  },
  //Additionally, you can purge any persisted state by adding an extra reducer
  //to the specific slice that you would like to clear when calling persistor.purge().
  //This is especially helpful when you are looking to clear persisted state on a dispatched logout action.
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

//Export actions for edit authentication
export const { storeToken } = authentication.actions;