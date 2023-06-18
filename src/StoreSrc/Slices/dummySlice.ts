import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface DummySlice {
  value: number;
}

// Define the initial state using that type
const initialState: DummySlice = {
  value: 0,
};

export const dummySlice = createSlice({
  name: "dummy",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state , action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dummySlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value
export const selectCount = (state: any) => state.counter.value;

export default dummySlice.reducer
