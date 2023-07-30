import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { getAlbumDetails } from "../redux/thunk/albums";
import AlbumDetailsCard from "../components/Albums/AlbumDetailsCard";
import AlbumSlider from "../components/Albums/AlbumSlider";
import Grid from "@mui/material/Grid";

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
        minHeight: "93vh",
        alignItems: "center",
        padding: "5%",
      }}
    >
      {album?.map((item) => (
        <Paper
          elevation={12}
          sx={{
            minHeight: "60vh",
            maxHeight: { xs: "auto", md: "75vh" },
            minWidth: "60vw",
            maxWidth: "75%",
            display: "flex",
          }}
          key={item._id}
        >
          <Stack direction="row" sx={{ width: "100%" }}>
            {" "}
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={12} lg={12} sx={{marginBottom: "auto"}}>
                <AlbumDetailsCard item={item} />
              </Grid>
              <Grid item xs={12} lg={12}>
                
                  <iframe
                    title="spotify "
                    style={{
                      height: "100%",
                      borderRadius: "12px",
                      border: "0px",
                    }}
                    src={item.embedLink}
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                
              </Grid>
            </Grid>
            <AlbumSlider item={item} />
          </Stack>
        </Paper>
      ))}
    </Paper>
  );
}
