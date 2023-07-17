import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { getAlbumDetails } from "../redux/thunk/albums";
import AlbumDetailsCard from "../components/Albums/AlbumDetailsCard";
import AlbumSlider from "../components/Albums/AlbumSlider";

export default function AlbumDetails() {
  const param = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAlbumDetails(param.id as string));
  }, [param.id, dispatch]);

  const album = useSelector((state: RootState) => state.albums.album);

  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "93vh",
        alignItems: "center",
      }}
    >
      {album?.map((item) => (
        <Paper
          elevation={12}
          sx={{ height: "75vh", width: "70%", display: "flex" }}
          key={item._id}
        >
          <Stack sx={{ height: "100%" }}>
            <AlbumDetailsCard item={item} />
            <iframe
              title="spotify "
              style={{ borderRadius: "12px", height: "30%", border: "0px" }}
              src={item.embedLink}
              width="100%"
              height="30%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Stack>
          <AlbumSlider item={item} />
        </Paper>
      ))}
    </Paper>
  );
}
