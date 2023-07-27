import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

import { Album } from "../../types/type";
import { wishListActions } from "../../redux/slices/wishList";

type Prop = {
  wish: Album;
};

export default function WishItem({ wish }: Prop) {
  const dispatch = useDispatch();
  function removeWishItem() {
    dispatch(wishListActions.removeFormWishList(wish));
  }
  return (
    <Card sx={{ display: "flex", padding: "1vh" }}>
      <Link
        to={`/albums/${wish._id}`}
        style={{ textDecoration: "none", color: "inherit", width: "100%" }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            padding: "1vh",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={wish.image.albumArt}
            alt="green iguana"
            sx={{ width: "70%" }}
          />
          <CardContent sx={{ width: "30%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {wish.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {wish.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button variant="contained" onClick={removeWishItem}>
          remove
        </Button>
        <Button variant="contained">
          <Link to="/albums" style={{ color: "inherit" }}>
            back
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
