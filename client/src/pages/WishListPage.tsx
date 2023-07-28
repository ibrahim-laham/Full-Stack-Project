import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import WishItem from "../components/WishList/WishItem";

export default function WishListPage() {
  const wishList = useSelector((state: RootState) => state.wishList.wishList);

  if (wishList.length === 0) {
    return (
      <Paper
        elevation={1}
        sx={{
          minHeight: "81.2vh",
          padding: "3%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            padding: "3%",
            minWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Your WishList is Empty</Typography>
          <Button variant="contained">
            <Link to="/albums" style={{ color: "inherit" }}>
              back
            </Link>
          </Button>
        </Paper>
      </Paper>
    );
  }
  return (
    <Paper elevation={1} sx={{ minHeight: "93vh", padding: "3%" }}>
      <Stack justifyContent="center" alignItems="center">
        <Paper elevation={12} sx={{ padding: "3%", minWidth: "50%" }}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            {wishList.map((wish) => (
              <Grid item md={8} key={wish._id}>
                <WishItem wish={wish}  />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </Paper>
  );
}
