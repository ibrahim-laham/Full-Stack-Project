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
import { MdReviews } from "react-icons/md";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
  };

  const cartHandler = () => {
    dispatch(cartActions.addToCartList({ ...item, quantity: 1 }));
  };
  let favoriteColor = "white";
  let cartColor = "white";

  function checkColor() {
    const isInWishList = wishList.find((album) => album._id === item._id);
    const isInCartList = cartList.find((album) => album._id === item._id);
    isInWishList ? (favoriteColor = "gold") : (favoriteColor = "white");
    isInCartList ? (cartColor = "gold") : (cartColor = "white");
  }
  checkColor();

  return (
    <Card sx={{ width: "100%", height: "100%", margin: "auto" }}>
      <CardMedia
        sx={{ minHeight: "30vh" }}
        image={item.image?.albumArt}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="overline">
            {" "}
            total tracks:{" "}
            <Box component="span" sx={{ color: "gold" }}>
              {" "}
              {item.totalTracks}{" "}
            </Box>{" "}
          </Typography>
          <Typography variant="overline">
            Release Date: <Box component="span" sx={{ color: "gold" }}>{item.releaseDate.slice(0, 10)}</Box>{" "}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <IconButton onClick={cartHandler}>
            <AddShoppingCartIcon style={{ color: cartColor }} />
          </IconButton>
          <IconButton onClick={favoriteHandler}>
            <FavoriteIcon style={{ color: favoriteColor }} />
          </IconButton>
          <a href={item.link?.spotify} target="_blank" rel="noreferrer">
            <IconButton>
              <BsSpotify style={{ color: "springgreen" }} />
            </IconButton>
          </a>{" "}
          <a href={item.link?.youtube} target="_blank" rel="noreferrer">
            <IconButton>
              <BsYoutube style={{ color: "red" }} />
            </IconButton>
          </a>{" "}
          <a href={item.link?.wikipedia} target="_blank" rel="noreferrer">
            <IconButton>
              <FaWikipediaW style={{ color: "white" }} />
            </IconButton>
          </a>
          <a href={item.rating?.pitchforkLink} target="_blank" rel="noreferrer">
            <IconButton title="review">
              <MdReviews style={{ color: "gold" }} />
            </IconButton>
          </a>
        </Box>
        <Box>
          <Rating
            value={item.rating.rating}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            max={10}
            readOnly
            sx={{ color: "goldRush.main" }}
          />
        </Box>
      </CardActions>
    </Card>
  );
}
