import Order, {OrderDocument} from "../models/Order";


const createOrderservice = async (order: OrderDocument): Promise<OrderDocument> => {
  return await order.save();
}

export default {createOrderservice};