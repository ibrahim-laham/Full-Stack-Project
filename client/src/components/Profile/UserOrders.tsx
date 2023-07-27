import Paper from "@mui/material/Paper";

import { Order } from "../../types/type";
import Grid from "@mui/material/Grid";
import UserOrdersItem from "./UserOrdersItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Prop = {
  userOrders: Order;
};

export default function UserOrders({ userOrders }: Prop) {
  if (!userOrders) {
    return (
      <Paper elevation={12} sx={{ padding: "5%", minHeight: "32vh" }}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Typography variant="h4">No orders received orders yet</Typography>
        </Stack>
      </Paper>
    );
  } else {
    return (
      <Paper elevation={12} sx={{ padding: "5%", minHeight: "30vh" }}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Typography variant="h5" sx={{ width: "90%" }}>
            {" "}
            ordered at :
            <Typography variant="body1">
              {userOrders.createdAt.toString()}
            </Typography>
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{ width: "90%" }}
          >
            {userOrders.productList.map((item) => (
              <Grid item md={12} key={item._id}>
                <UserOrdersItem item={item} />{" "}
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="secondary">
            Cancel Order
          </Button>
        </Stack>
      </Paper>
    );
  }
}
