import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Order } from "../../types/type";


type OrdersState = {
  orders: Order[]
}

const ordersState:OrdersState = {
  orders: []
}

const ordersSlice = createSlice({
  name: "orders",
  initialState:ordersState,
  reducers: {
    getOrderList: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload
    }
  }
})

export const ordersActions = ordersSlice.actions;
const ordersReducer = ordersSlice.reducer;
export default ordersReducer;