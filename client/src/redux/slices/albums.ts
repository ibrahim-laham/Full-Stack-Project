import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";

type AlbumsState = {
  albums: Album[];
  album: Album[];
  ordering: "asc" | "desc";
};

const albumsState: AlbumsState = {
  albums: [],
  album: [
    {
      title: "",
      artist: "",
      price: 0,
      image: { albumArt: "", vinyl: "" },
      link: { spotify: "", youtube: "", wikipedia: "" },
      releaseDate: "",
      _id: "",
      artistInfo: "",
      description: "",
      embedLink: "",
      totalTracks: 0,
      genre: "",
      rating: {
        rating: 0,
        pitchforkLink: "",
      },
      quantity: 1,
    },
  ],
  ordering: "asc",
};

const albumsSlice = createSlice({
  name: "albums",
  initialState: albumsState,
  reducers: {
    displayAlbums: (state, action: PayloadAction<Album[]>) => {
      state.albums = action.payload;
    },
    displayAlbumDetail: (state, action: PayloadAction<Album[]>) => {
      state.album = action.payload;
    },
    searchAlbums: (state, action: PayloadAction<string>) => {
      state.albums = state.albums.filter(
        (album) => action.payload.toLowerCase() === album.title.toLowerCase()
      );
    },
    sortOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.ordering = action.payload;
    },
    sortAlbums: (state) => {
      state.ordering === "asc"
        ? (state.albums = state.albums.sort((a, b) => a.price - b.price))
        : (state.albums = state.albums.sort((a, b) => b.price - a.price));
    },
  },
});

export const albumsActions = albumsSlice.actions;
const albumsReducer = albumsSlice.reducer;
export default albumsReducer;
