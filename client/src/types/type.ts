export type Album = {
  title: string;
  artist: string;
  price: number;
  image: { albumArt: string; vinyl: string };
  link: { spotify: string; youtube: string; wikipedia: string };
  releaseDate: string;
  _id: string;
  artistInfo: string;
  description: string;
  embedLink: string;
  totalTracks: number;
  genre: string;
  rating: {
    rating: number;
    pitchforkLink: string;
  };
  quantity: number;
};

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
  __v: number;
};

export type ProductOrder = {
  _id: string;
  title: string;
  price: number;
  image: { albumArt: string; vinyl: string };
  link: { spotify: string; youtube: string; wikipedia: string };
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

export type Order = {
  userId: string;
  createdAt: Date;
  productList: ProductOrder[];
};
