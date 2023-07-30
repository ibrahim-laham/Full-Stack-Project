import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FaWikipediaW } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import { Album } from "../../types/type";

import { RootState } from "../../redux/store";
import { wishListActions } from "../../redux/slices/wishList";
import { cartActions } from "../../redux/slices/cart";

type Prop = {
  item: Album;
};

export default function AlbumDetailsCard({ item }: Prop) {
  const dispatch = useDispatch();
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  const cartList = useSelector((state: RootState) => state.cart.cartList);

  const favoriteHandler = () => {
    dispatch(wishListActions.addToWishList(item));
    wishList.map((wish) => {
      if (wish._id === item._id) {
        return dispatch(wishListActions.removeFormWishList(item));
      } else return null;
    });
  };

  const cartHandler = () => {
    dispatch(cartActions.addToCartList({ ...item, quantity: 1 }));
    cartList.map((cartItem) => {
      if (cartItem._id === item._id) {
        return dispatch(cartActions.removeFormCartList(item));
      } else return null;
    });
  };
  let favoriteColor = "white";
  let cartColor = "white";

  function checkColor() {
    wishList.map((wish) => {
      if (wish._id === item._id) {
        return (favoriteColor = "gold");
      } else {
        return null;
      }
    });

    cartList.map((cartItem) => {
      if (cartItem._id === item._id) {
        return (cartColor = "gold");
      } else {
        return null;
      }
    });
  }
  checkColor();
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardMedia
        component="img"
        sx={{ minHeight: "30vh" }}
        image={item.image?.albumArt}
        title={item.title}
      />
      <CardContent sx={{ margin: "auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <IconButton onClick={cartHandler}>
          <AddShoppingCartIcon style={{ color: cartColor }} />
        </IconButton>
        <IconButton onClick={favoriteHandler}>
          <FavoriteIcon style={{ color: favoriteColor }} />
        </IconButton>
        <IconButton>
          <a href={item.link?.spotify} target="_blank" rel="noreferrer">
            <BsSpotify style={{ color: "springgreen" }} />
          </a>{" "}
        </IconButton>
        <IconButton>
          <a href={item.link?.youtube} target="_blank" rel="noreferrer">
            <BsYoutube style={{ color: "red" }} />
          </a>{" "}
        </IconButton>
        <IconButton>
          <a href={item.link?.wikipedia} target="_blank" rel="noreferrer">
            <FaWikipediaW style={{ color: "white" }} />
          </a>
        </IconButton>
        <IconButton>
          <a href={item.rating?.pitchforkLink} target="_blank" rel="noreferrer">
            <AiOutlineStar style={{ color: "gold" }} />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
