import axios from "axios";
import { AppDispatch } from "../store";
import { ordersActions } from "../slices/orders";

import { Album, Order } from "../../types/type";

export function createOrder(userId: string, cartList: Album[]) {
  const url = `https://full-stack-project-backend-e3xz.onrender.com/orders/${userId}`;
  const token = localStorage.getItem("Access_token");
  return async (dispatch: AppDispatch) => {
    await axios
      .post(url, cartList, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
}

export function getUserOrders(userId: string) {
  const url = `https://full-stack-project-backend-e3xz.onrender.com/orders/${userId}`;

  return async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("Access_token");
    await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        return res.data.map((item:Order) => dispatch(ordersActions.getOrderList(item)))
         ;
      })
      .catch((error) => console.log(error));
  };
}
