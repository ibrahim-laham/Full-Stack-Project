import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";

import { MdDeleteForever } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

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
    <Card sx={{ margin: "auto",display: "flex", padding: "1vh", flexDirection: {xs: "column", md: "row"},justifyContent: "space-between", height: {md: "25vh",lg:"15vh"}}}>
      <Link
        to={`/albums/${wish._id}`}
        style={{ textDecoration: "none", color: "inherit" , width: "100%"}}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            padding: "1vh",
            justifyContent: "space-between",
            margin: "auto",
            height: "100%",
            width: "100%"
          }}
        >
          <CardMedia
            component="img"
            image={wish.image.albumArt}
            alt="green iguana"
            sx={{height:"100%", width: "100%", objectFit: "cover"}}
          />
          <CardContent sx={{width: "30%",marginBottom: "auto",paddingTop: "0" }}>
            <Typography gutterBottom variant="h6"  component="div">
              {wish.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {wish.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions sx={{ alignItem: "center", justifyContent: "center", width: "30%", margin: "auto" }}>
        <IconButton onClick={removeWishItem}>
          <MdDeleteForever />
        </IconButton>
        <Link to="/albums" style={{ color: "inherit" }}>
          <IconButton>
            <RiArrowGoBackFill />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
