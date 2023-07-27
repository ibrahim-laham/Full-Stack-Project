import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Order } from "../../types/type";


type OrdersState = {
  orders: Order
}

const ordersState:OrdersState = {
  orders: {
    userId: "",
    createdAt: new Date(),
    productList: [{
      _id: "",
      title: "",
      price: 0,
      image: { albumArt: "", vinyl: "" },
      link: { spotify: "", youtube: "", wikipedia: "" },
      releaseDate: new Date(),
      description: "",
      artistInfo: "",
      embedLink: "",
      totalTracks: 0,
      genre: "",
      rating: {
        rating: 0,
        pitchforkLink: "",
      },
      quantity: 0,
    }],
}
}

const ordersSlice = createSlice({
  name: "orders",
  initialState:ordersState,
  reducers: {
    getOrderList: (state, action: PayloadAction<Order>) => {
      state.orders = action.payload
    }
  }
})

export const ordersActions = ordersSlice.actions;
const ordersReducer = ordersSlice.reducer;
export default ordersReducer;