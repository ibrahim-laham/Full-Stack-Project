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
          elevation={12}
          sx={{
            padding: "3%",
            width: "30vw",
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
    );
  }
  return (
      <Stack justifyContent="center" alignItems="center" padding={5} sx={{ maxWidth: "40vw",margin: "auto"}}>
          <Grid
            container
            alignItems="center"
            spacing={2}
          >
            {wishList.map((wish) => (
              <Grid item md={12} key={wish._id}  >
                <WishItem wish={wish}  />
              </Grid>
            ))}
          </Grid>
      </Stack>
      
  );
}
