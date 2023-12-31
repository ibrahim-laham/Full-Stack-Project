import { configureStore } from "@reduxjs/toolkit";

import albumsReducer from "./slices/albums";
import userReducer from "./slices/user";
import wishListReducer from "./slices/wishList";
import cartReducer from "./slices/cart";
import ordersReducer from "./slices/orders";
import profileReducer from "./slices/profile";

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    user: userReducer,
    wishList: wishListReducer,
    cart: cartReducer,
    orders: ordersReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
