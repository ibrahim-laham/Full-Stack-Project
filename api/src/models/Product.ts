// product model
import mongoose, { Document } from "mongoose";


export type ProductDocument = Document & {
  title: string;
  price: number;
  image: string;
  link: string;
  releaseDate: Date;
  description: string;
  artistInfo: string;
  embedLink: string;
}

export const productSchema = new mongoose.Schema({
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
  description: {
    type: String,
  },
  artistInfo: {
    type: String,
  },
  embedLink: {
    type: String,
  }
});

export default mongoose.model<ProductDocument>("Product", productSchema);
