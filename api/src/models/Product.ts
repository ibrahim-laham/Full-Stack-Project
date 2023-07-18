// product model
import mongoose, { Document } from "mongoose";


export type ProductDocument = Document & {
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
  }
});

export default mongoose.model<ProductDocument>("Product", productSchema);
