import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";



type WishList = {
  wishList: Album[];
};

const wishListState: WishList = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState: wishListState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Album>) => {
      state.wishList.map((item) => {
        if (item._id === action.payload._id) {
          return (state.wishList = state.wishList.filter(
            (item) => item._id !== action.payload._id
          ));
        } else {
          return null;
        }
      });
      state.wishList.push(action.payload);
    },
    removeFormWishList: (state, action: PayloadAction<Album>) => {
      state.wishList = state.wishList.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const wishListActions = wishListSlice.actions;
const wishListReducer = wishListSlice.reducer;
export default wishListReducer;
