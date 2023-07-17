import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
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

export default function AlbumDetails() {
  const param = useParams();
  const albumsData = useSelector((state: RootState) => state.albums.albums);
  const album = albumsData.filter((album) => album._id === param.id);

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
      <Paper elevation={12} sx={{ height: "75vh", width: "50vw" }}>
        <Stack sx={{ height: "100%" }}>
          <Card sx={{ width: "100%", height: "70%" }}>
            <CardMedia
              sx={{ height: "50%" }}
              image={album[0]?.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {album[0]?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {album[0]?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to cart</Button>
              <Button size="small">Add to wishList</Button>
              <IconButton>
                <a href={album[0]?.link} target="_blank" rel="noreferrer">
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
            src={album[0]?.embedLink}
            width="100%"
            height="30%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Stack>
      </Paper>
    </Paper>
  );
}
