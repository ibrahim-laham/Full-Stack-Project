import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import CartItem from "../components/Cart/CartItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { RootState, AppDispatch } from "../redux/store";
import { createOrder } from "../redux/thunk/order";
import { cartActions } from "../redux/slices/cart";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const total = useSelector((state: RootState) => state.cart.total);
  const userId = useSelector((state: RootState) => state.user.userData._id);
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();

  function checkOut() {
    appDispatch(createOrder(userId, cartList));
    dispatch(cartActions.resetCart());
  }

  dispatch(cartActions.calculateTotal())

  if (cartList.length === 0) {
    return (
      <Paper
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "2vh",
          minHeight: "93vh",
          padding: "4vh",
        }}
        elevation={5}
      >
        <Typography variant="h3" align="center">
          Your Cart is empty
        </Typography>
        <Link to="/albums" style={{ textDecoration: "none" }}>
          <Button variant="contained">go back</Button>
        </Link>
      </Paper>
    );
  } else {
    return (
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "2vh",
          minHeight: "93vh",
          padding: "4vh",
        }}
        elevation={5}
      >
        <Typography variant="h3" align="center">
          Your Cart Items:
        </Typography>
        <Grid container spacing={2} columns={1} sx={{ maxWidth: "70%" }}>
          {cartList.map((item) => (
            <Grid item md={12} lg={12} sx={{ overflow: "hidden" }}>
              <CartItem item={item} key={item._id} />
            </Grid>
          ))}
        </Grid>
        <Paper elevation={8}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Total Amount: {total} &#x20AC; </Typography>
            <Button onClick={checkOut}>Check out</Button>
          </Stack>
        </Paper>
      </Paper>
    );
  }
}
