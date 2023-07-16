import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAlbumsData } from "../redux/thunk/albums";
import { RootState, AppDispatch } from "../redux/store";
import AlbumCard from "../components/Albums/AlbumCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/system/Unstable_Grid";

export default function AlbumsPage() {
  const albumsData = useSelector((state: RootState) => state.albums.albums);

  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(getAlbumsData());
  }, [appDispatch]);


  return (
    <Paper elevation={1}  square sx={{padding: "2vh", height: "90vh", backgroundImage: "linear-gradient( 179deg,  rgba(0,0,0,0.2) 60%, rgba(135, 7, 7,0.55) 103.9% )"}} >
      <Grid container spacing={5}>
        {albumsData?.map((album) => (
          <Grid xs={12} md={3}>
            <AlbumCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
