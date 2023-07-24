import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";

type CartState = {
  cartList: Album[];
};

const cartState: CartState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCartList: (state, action: PayloadAction<Album>) => {
      state.cartList.map((item) => {
        if (item._id === action.payload._id) {
          return (state.cartList = state.cartList.filter(
            (item) => item._id !== action.payload._id
          ));
        } else {
          return null;
        }
      });
      state.cartList.push(action.payload);
    },
    removeFormCartList: (state, action: PayloadAction<Album>) => {
      state.cartList = state.cartList.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
