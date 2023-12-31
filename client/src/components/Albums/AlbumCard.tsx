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
  };

  const cartHandler = () => {
    dispatch(cartActions.addToCartList({ ...album, quantity: 1 }));
  };
  let favoriteColor = "white";
  let cartColor = "white";

  function checkColor() {
    const isInWishList = wishList.find((item) => item._id === album._id);
    const isInCartList = cartList.find((item) => item._id === album._id);
    isInWishList? favoriteColor= "gold" : favoriteColor= "white";
    isInCartList? cartColor= "gold" : cartColor= "white";
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
        <Typography variant="body2" color="text.secondary" sx={{overflow: "hidden", whiteSpace: "nowrap",textOverflow: "ellipsis"}}>
          {album.description}
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
            
            onClick={favoriteHandler}
          >
            <FavoriteIcon style={{ color: favoriteColor }} />{" "}
          </Button>
       

        <Button
          size="small"
           onClick={cartHandler}
        >
          <ShoppingCartIcon  style={{ color: cartColor }}/>{" "}
        </Button>
        <Typography sx={{ marginLeft: "5px" }}>
          &#x20AC;{album.price}
        </Typography>
      </CardActions>
    </Card>
  );
}
