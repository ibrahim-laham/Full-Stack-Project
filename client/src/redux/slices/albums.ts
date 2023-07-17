import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";

type AlbumsState = {
  albums: Album[];
  album: Album[];
};

const albumsState: AlbumsState = {
  albums: [],
  album: [{
    title: "",
    artist: "",
    price: 0,
    image: "",
    link: "",
    releaseDate: "",
    _id: "",
    artistInfo: "",
    description: "",
    embedLink: "",
  }],
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
  },
});

export const albumsActions = albumsSlice.actions;
const albumsReducer = albumsSlice.reducer;
export default albumsReducer;
