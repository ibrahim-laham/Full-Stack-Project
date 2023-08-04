import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import WishItem from "./WishItem";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.wishList.wishList);

  if (wishList.length === 0) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        padding={5}
        sx={{ maxWidth: "40vw", margin: "auto" }}
      >
        <Typography variant="h3">Your WishList is Empty</Typography>
      </Stack>
    );
  }
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      padding={5}
      sx={{ maxWidth: "40vw", margin: "auto" }}
    >
      <Grid container alignItems="center" spacing={2}>
        {wishList.map((wish) => (
          <Grid item md={12} key={wish._id}>
            <WishItem wish={wish} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
