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
import { useTheme } from "@mui/material/styles";

export default function AlbumDetails() {
  const param = useParams();
  const albumsData = useSelector((state: RootState) => state.albums.albums);
  const album = albumsData.filter((album) => album._id === param.id);

  const theme = useTheme();
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
      <Paper elevation={12} sx={{ height: "80vh", width: "50vw" }}>
        <Card sx={{ width: "100%", height: "72%" }}>
          <CardMedia
            sx={{ height: "70%" }}
            image={album[0].image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {album[0].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to cart</Button>
            <Button size="small">Add to wishList</Button>
          </CardActions>
        </Card>
        <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/2LMkwUfqC6S6s6qDVlEuzV?utm_source=generator" width="100%" height="30%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Paper>
    </Paper>
  );
}
