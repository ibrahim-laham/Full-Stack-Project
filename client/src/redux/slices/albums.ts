import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Album } from "../../types/type";

type AlbumsState = {
  albums: Album[];
};

const albumsState: AlbumsState = {
  albums: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState: albumsState,
  reducers: {
    displayAlbums: (state, action: PayloadAction<Album[]>) => {
      state.albums = action.payload;
    },
  },
});

export const albumsActions = albumsSlice.actions;
const albumsReducer = albumsSlice.reducer;
export default albumsReducer;
