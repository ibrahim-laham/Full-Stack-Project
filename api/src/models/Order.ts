import mongoose, { Document } from "mongoose";

import { ProductDocument, productSchema } from "./Product";

export type ProductOrderDocument = Document &{
  title: string;
  price: number;
  image: {albumArt: string; vinyl: string;};
  link: {spotify: string; youtube: string; wikipedia: string;};
  releaseDate: Date;
  description: string;
  artistInfo: string;
  embedLink: string;
  totalTracks: number;
  genre: string;
  rating: {
    rating: number;
    pitchforkLink: string;
  };
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
    type: {
      albumArt: String,
      vinyl: String,
    },
  },
  link: {
    type: {
      spotify: String,
      youtube: String,
      wikipedia: String,
    }
  },
  releaseDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  artistInfo: {
    type: String,
  },
  embedLink: {
    type: String,
  },
  totalTracks: {
    type: Number,
  }, 
  genre: {
    type: String,
  },
  rating: {
    type: {
      rating: Number,
      pitchforkLink: String,
    },
  },
  quantity: {
    type: Number,
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
