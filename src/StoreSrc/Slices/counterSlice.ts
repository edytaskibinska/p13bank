import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};


// Récupérez le reducer et les actions
// La fonction createSlice  retourne un objet avec les propriétés suivantes :

// name  : le nom du slice.

// reducer  : le Reducer créé par Redux-Toolkit.

// actions  : un objet contenant les action creators.
// On va donc déstructurer le slice pour récupérer le reducer et les actions :

// // on extrait les actions et le reducer
// const { actions, reducer } = themeSlice
// // on export chaque action individuellement
// export const { set, toggle } = actions
// // on export le reducer comme default export
// export default reducer

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value
export const selectCount = (state: any) => state.counter.value;

export default counterSlice.reducer
