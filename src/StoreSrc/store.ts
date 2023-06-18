import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
//import slice
import { counterSlice } from "./Slices/counterSlice";
import { dummySlice } from "./Slices/dummySlice";

//TEST WITH REDUX PERSIST
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
//END WITH REDUX PERSIST

//COMBINE REDUCERS - mettre reducers ensemble
const reducers = combineReducers({
  counter: counterSlice.reducer,
  dummy: dummySlice.reducer,
});

//create perrsist config
export const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

//////        OPTION 1
// export const store = configureStore({
//   reducer: persistedReducer,
// });

//////        OPTION  2
//This creates a Redux store, and
//also automatically configure the Redux DevTools extension
//so that you can inspect the store while developing.
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    dummy: dummySlice.reducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

console.log(" STORE", store.getState())

// This creates a Redux store,
//and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//TODO utiliser persistor
//export let persistor = persistStore(store);

