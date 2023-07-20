import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./slices/albums";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
