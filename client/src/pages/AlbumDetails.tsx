import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { BsSpotify, BsYoutube } from "react-icons/bs";

import { getAlbumDetails } from "../redux/thunk/albums";

export default function AlbumDetails() {
  const param = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=> {
    dispatch(getAlbumDetails(param.id as string))
  },[param.id,dispatch])

  const album = useSelector((state: RootState) => state.albums.album);
  console.log(album)

  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "93vh",
        alignItems: "center",
      }}
    > {album?.map(item =>
     
      <Paper elevation={12} sx={{ height: "75vh", width: "50vw" }}>
        <Stack sx={{ height: "100%" }}>
          <Card sx={{ width: "100%", height: "70%" }}>
            <CardMedia
              sx={{ height: "50%" }}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to cart</Button>
              <Button size="small">Add to wishList</Button>
              <IconButton>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <BsSpotify style={{ color: "springgreen" }} />
                </a>{" "}
              </IconButton>
              <IconButton>
                <BsYoutube style={{ color: "red" }} />{" "}
              </IconButton>
            </CardActions>
          </Card>
          <iframe
            title="spotify "
            style={{ borderRadius: "12px", height: "30%" }}
            src={item.embedLink}
            width="100%"
            height="30%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Stack>
      </Paper>
    )
    }
      
    </Paper>
  );
}
