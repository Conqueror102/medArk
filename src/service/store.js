import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
  import GlobalState from "../service/GlobalState";
  import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UseRTK";

  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
  const user = persistReducer(persistConfig, GlobalState);
  
  export const store = configureStore({
    reducer: {
        user,
      userApi: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(userSlice.middleware),
  });
  
  export default store;
  