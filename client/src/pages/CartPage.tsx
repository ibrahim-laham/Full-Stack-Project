import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CartItem from "../components/Cart/CartItem";
import Typography from "@mui/material/Typography";

export default function CartPage() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  return (
    <Box sx={{ flexGrow: 1, display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h3" align="center" >Your Cart Items:</Typography>
      <Grid
        container
        spacing={2}
        columns={1}
        sx={{maxWidth: "70%"}}
        /* display="grid"
        alignItems="center"
        justifyContent="center" */
      >
        {cartList.map((item) => (
          <CartItem item={item} key={item._id} />
        ))}
      </Grid>
    </Box>
  );
}
