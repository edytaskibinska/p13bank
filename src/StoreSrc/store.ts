import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
///import slices
import { authentication } from "./slices/authentication";
import { editButton } from "./slices/editButton";
import { user } from "./slices/user";

import { useArgentBankAPI } from "./apiHooks/useArgentBankAPI";
//TODO a reviser
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  auth: authentication.reducer,
  editBtn: editButton.reducer,
  user: user.reducer,
  [useArgentBankAPI.reducerPath]: useArgentBankAPI.reducer,
});

export const persistDataConf = {
  key: "root",
  version: 1,
  storage,
};

console.log("useArgentBankAPI", useArgentBankAPI.middleware)
const persistedReducer = persistReducer(persistDataConf, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  //https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(useArgentBankAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export let persistor = persistStore(store);
