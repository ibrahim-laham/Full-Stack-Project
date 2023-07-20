export type Album = {
  title: string;
  artist: string;
  price: number;
  image: {albumArt: string; vinyl: string;};
  link: {spotify: string; youtube: string; wikipedia: string;};
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
};

export type UserData = {
  nickName: string;
  email: string; 
  password: string;
  _id: string;
  __v: number;
}