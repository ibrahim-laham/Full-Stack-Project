import { NotFoundError } from "../helpers/apiError";

import Order, {OrderDocument} from "../models/Order";


const createOrderservice = async (order: OrderDocument): Promise<OrderDocument> => {
  return await order.save();
}

const getOrdersByIdService = async (userId: string): Promise<OrderDocument[]> => {
 const orders= await Order.find({userId: userId})
 if (!orders) {
  throw new NotFoundError(`could not find orders for this userId ${userId}`)
 }
 return orders;
}

export default {createOrderservice,getOrdersByIdService};