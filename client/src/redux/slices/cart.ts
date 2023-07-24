import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";

type CartState = {
  cartList: Album[];
  total: number;
};

const cartState: CartState = {
  cartList: [],
  total: 0,
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
    increaseQuantity: (state, action: PayloadAction<Album>) => {
      state.cartList.map((item) =>
        item._id === action.payload._id ? (item.quantity += 1) : null
      );
    },
    decreaseQuantity: (state, action: PayloadAction<Album>) => {
      state.cartList.map((item) =>
        item._id === action.payload._id && item.quantity > 1
          ? (item.quantity -= 1)
          : null
      );
    },
    resetCart: (state) => {
      state.cartList = [];
    },
    calculateTotal: (state) => {
      let sum = 0;
      state.cartList.map(item => sum += item.price*item.quantity)
      state.total = sum;
    },
    resetTotal: (state) => {
      state.total = 0
    }
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
