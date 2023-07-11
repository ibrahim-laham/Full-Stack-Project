import mongoose, {Document} from "mongoose";

import {ProductDocument, productSchema} from "./Product";

export type OrderDocument = Document & {
  userId: string;
  createdAd: Date;
  productList: ProductDocument[];
}

export const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  productList:{
    type: [productSchema] 
  },
})

export default mongoose.model<OrderDocument>("Order", orderSchema)