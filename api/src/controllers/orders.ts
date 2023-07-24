import { Request, Response, NextFunction } from "express";

import Order from "../models/Order";
import orderServices from "../services/orders";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = new Order({
      userId: req.params.userId,
      productList: req.body,
    });

    const order = await orderServices.createOrderservice(newOrder);

    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrdersById = async (req: Request,
  res: Response,
  next: NextFunction) => {
    try {
      const userId = req.params.userId;
      const orderList = await orderServices.getOrdersByIdService(userId)
      res.status(200).json(orderList)
    }
    catch (error) {
      next(error)
    }
}
