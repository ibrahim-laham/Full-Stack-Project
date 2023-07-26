import axios from "axios";
import { AppDispatch } from "../store";
import { albumsActions } from "../slices/albums";

export function getAlbumsData() {
  const url = "https://full-stack-project-backend-e3xz.onrender.com/products";
  return async (dispatch: AppDispatch) => {
    try {
      await axios
        .get(url)
        .then((res) => dispatch(albumsActions.displayAlbums(res.data.product)))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAlbumDetails(productId: string) {
  const url = `https://full-stack-project-backend-e3xz.onrender.com/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    try {
      await axios
        .get(url)
        .then((res) =>
          dispatch(albumsActions.displayAlbumDetail(res.data.foundProduct))
        )
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
}
