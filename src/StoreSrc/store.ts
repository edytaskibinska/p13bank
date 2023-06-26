import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
///import slices
import { authentication } from "./slices/authentication";
import { editNameButton } from "./slices/editNameButton";
import { user } from "./slices/user";

import { useArgentBankAPI } from "./apiHooks/useArgentBankAPI";
// Basic usage involves adding persistReducer and persistStore to your setup.
//IMPORTANT Every app needs to decide how many levels of state they want to "merge". The default is 1 level. Please read through the state reconciler docs for more information.
//https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
// FLUSH,
// REHYDRATE,
// PAUSE,
// PERSIST,
// PURGE,
// REGISTER,  => action types from redux persist

//If using Redux-Persist, you should specifically ignore all the action types it dispatches:
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Reducers are the most important Redux concept. A typical reducer function needs to:

// Look at the type field of the action object to see how it should respond
// Update its state immutably, by making copies of the parts of the state that need to change and only modifying those copies

const reducers = combineReducers({
  auth: authentication.reducer,
  editBtn: editNameButton.reducer,
  user: user.reducer,
  [useArgentBankAPI.reducerPath]: useArgentBankAPI.reducer,
});

//Redux persist is a library allowing to save the redux store in the local storage of your browser.
//https://www.bam.tech/en/article/redux-persist-how-it-works-and-how-to-change-the-structure-of-your-persisted-store
export const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

console.log("useArgentBankAPI", useArgentBankAPI.middleware);
const persistedReducer = persistReducer(persistConfig, reducers);

// Simplifying Store Setup with configureStore
// configureStore helps with those issues by:

// Having an options object with "named" parameters, which can be easier to read
// Letting you provide arrays of middleware and enhancers you want to add to the store, and calling applyMiddleware and compose for you automatically
// Enabling the Redux DevTools Extension automatically

export const store = configureStore({
  // Importing or creating the root reducer function
  reducer: persistedReducer,
  //https://redux-toolkit.js.org/api/getDefaultMiddleware
  //Setting up middleware, likely including at least one middleware to handle asynchronous logic
  //If using Redux-Persist, you should specifically ignore all the action types it dispatches:
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(useArgentBankAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export let persistor = persistStore(store);

// the persistor object is returned by persistStore with the following methods:
// .purge()
// purges state from disk and returns a promise
// .flush()
// immediately writes all pending state to disk and returns a promise
// .pause()
// pauses persistence
// .persist()
// resumes persistence
