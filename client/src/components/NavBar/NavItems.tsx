import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { MdFavorite } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";

type Prop = {
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  pages: {
    [key: string]: string | number | undefined;
  }[];
};

export default function NavItems({ pages, handleCloseNavMenu }: Prop) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "space-around",
      }}
    >
      {pages.map((page) => (
        <Link
          to={`${page.path}`}
          style={{ textDecoration: "none" }}
          key={page.name}
        >
          <Badge badgeContent={page.badgeNumber} color="secondary">
            <Button
              onClick={handleCloseNavMenu}
              variant="text"
              sx={{
                color: "white",
                display: "flex",
                fontWeight: "700",
              }}
              startIcon={
                page.name === "Albums" ? (
                  <AlbumRoundedIcon />
                ) : page.name === "Home" ? (
                  <HomeRoundedIcon />
                ) : page.name === "Contact" ? (
                  <CallRoundedIcon />
                ) : page.name === "Wishlist" ? (
                  <MdFavorite />
                ) : page.name === "Cart" ? (
                  <BsFillCartFill />
                ) : page.name === "Sign in" ? (
                  <LoginRoundedIcon />
                ) : null
              }
            >
              <Typography variant="h6">{page.name}</Typography>
            </Button>
          </Badge>
        </Link>
      ))}
    </Box>
  );
}
