import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAlbumsData } from "../redux/thunk/albums";
import { RootState, AppDispatch } from "../redux/store";
import AlbumCard from "../components/Albums/AlbumCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/system/Unstable_Grid";
import AlbumsForm from "../components/AlbumsForm/AlbumsForm";
import Stack from "@mui/material/Stack";
import {BiSolidUpArrowAlt,BiSolidDownArrowAlt} from "react-icons/bi"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {albumsActions} from "../redux/slices/albums"

export default function AlbumsPage() {
  const [userInput, setUserInput] = useState<string>("");

  const albumsData = useSelector((state: RootState) => state.albums.albums);
  const ordering = useSelector((state:RootState)=> state.albums.ordering);
  const dispatch= useDispatch();

  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(getAlbumsData());
  }, [appDispatch, userInput]);

  function ToggleOrder () {
    ordering ==="asc"? dispatch(albumsActions.sortOrder("desc")): dispatch(albumsActions.sortOrder("asc"))
    dispatch(albumsActions.sortAlbums());
  } 

  return (
    <Paper
      elevation={1}
      square
      sx={{
        padding: "2vh",
        minHeight: "90vh",
        backgroundImage:
          "linear-gradient( 179deg,  rgba(0,0,0,0.2) 75%, rgba(135, 7, 7,0.55) 103% )",
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing="4">
        <Stack direction="row" sx={{width: "25%"}} >
          <AlbumsForm userInput={userInput} setUserInput={setUserInput} />
          <Button onClick={ToggleOrder} startIcon={ordering === "asc"? <BiSolidUpArrowAlt/> : <BiSolidDownArrowAlt/>} ><Typography>Sort </Typography> </Button>
        </Stack>

        <Grid container spacing={5} sx={{ width: "100%" }}>
          {albumsData?.map((album) => (
            <Grid
              xs={12}
              sm={6}
              md={3}
              lg={2}
              
              justifyContent="center"
            >
              <AlbumCard album={album} key={album._id} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
}
