import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Album } from "../../types/type";
import { wishListActions } from "../../redux/slices/wishList";
import { cartActions } from "../../redux/slices/cart";
import { RootState } from "../../redux/store";

type Prop = {
  album: Album;
};
export default function AlbumCard({ album }: Prop) {
  const dispatch = useDispatch();
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  const cartList = useSelector((state: RootState) => state.cart.cartList);

  const favoriteHandler = () => {
    dispatch(wishListActions.addToWishList(album));
    wishList.map((wish) => {
      if (wish._id === album._id) {
        return dispatch(wishListActions.removeFormWishList(album));
      } else return null;
    });
  };

  const cartHandler = () => {
    dispatch(cartActions.addToCartList({...album, quantity: 1}));
    cartList.map((item) => {
      if (item._id === album._id) {
        return dispatch(cartActions.removeFormCartList(album));
      } else return null;
    });
  };

  let favoriteColor = "white";
  let cartColor = "white";

  function checkColor() {
    wishList.map((wish) => {
      if (wish._id === album._id) {
        return (favoriteColor = "gold");
      } else {
        return null;
      }
    });

    cartList.map((item) => {
      if (item._id === album._id) {
        return (cartColor = "gold");
      } else {
        return null;
      }
    });
  }
  checkColor();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundImage:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) -15%, rgba(4,0,4,1) 90% );",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={album.image?.albumArt}
      />
      <CardContent sx={{ height: "25%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            height: "40%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {album.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {album.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          short description of the album
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/albums/${album._id}`} style={{ textDecoration: "none" }}>
          <Button size="small" sx={{ color: "white" }}>
            Learn More
          </Button>
        </Link>
        <Button
          size="small"
          sx={{ color: favoriteColor }}
          onClick={favoriteHandler}
        >
          <FavoriteIcon />{" "}
        </Button>
        <Button size="small" sx={{ color: cartColor }} onClick={cartHandler}>
          <ShoppingCartIcon />{" "}
        </Button>
        <Typography sx={{ marginLeft: "5px" }}>
          &#x20AC;{album.price}
        </Typography>
      </CardActions>
    </Card>
  );
}
