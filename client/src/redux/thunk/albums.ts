import axios from "axios";
import { AppDispatch } from "../store";
import { albumsActions } from "../slices/albums";

export function getAlbumsData() {
  const url = "http://localhost:8000/products";
  return async (dispatch: AppDispatch) => {
    try {
       axios
        .get(url)
        .then((res) => dispatch(albumsActions.displayAlbums(res.data.product)))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
}
