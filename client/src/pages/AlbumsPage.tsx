import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAlbumsData } from "../redux/thunk/albums";
import { RootState, AppDispatch } from "../redux/store";

export default function AlbumsPage() {
  const albumsData = useSelector((state: RootState) => state.albums.albums);

  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(getAlbumsData());
  }, [appDispatch]);

  console.log(albumsData);

  return (
    <div>
      {albumsData?.map((album) => (
        <div>{album.title}</div>
      ))}
    </div>
  );
}
