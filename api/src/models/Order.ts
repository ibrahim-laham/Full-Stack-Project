import mongoose, { Document } from "mongoose";

import { ProductDocument, productSchema } from "./Product";

type ProductOrderDocument = Document &{
  title: string;
  price: number;
  image: string;
  link: string;
  releaseDate: Date;
  quantity: number;
};

const productOrderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    default: "https://www.spotify.com",
  },
  releaseDate: {
    type: Date,
  },
  quantity: {
    type: Number,
    required: true,
  }
});

export type OrderDocument = Document & {
  userId: string;
  createdAd: Date;
  productList: ProductOrderDocument[];
};

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
  productList: {
    type: [productOrderSchema],
  },
});

export default mongoose.model<OrderDocument>("Order", orderSchema);
