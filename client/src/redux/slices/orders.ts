import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";

type OrdersState = {
  orders: Album[]
}

const ordersState:OrdersState = {
  orders: []
}

const ordersSlice = createSlice({
  name: "orders",
  initialState:ordersState,
  reducers: {
    getOrderList: (state, action: PayloadAction<Album[]>) => {
      state.orders= action.payload
    }
  }
})

export const ordersActions = ordersSlice.actions;
const ordersReducer = ordersSlice.reducer;
export default ordersReducer;