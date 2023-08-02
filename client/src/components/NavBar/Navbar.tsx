import { useSelector } from "react-redux";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { MdFavorite } from "react-icons/md";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

import Logo from "./Logo";
import MenuXs from "./MenuXs";
import LogoXs from "./LogoXs";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";

import { RootState } from "../../redux/store";
import WishListDrawer from "./WishListDrawer";


type PaletteMode = "light" | "dark";

type Prop = {
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
  mode: string;
};

const settings = [
  { path: "/profile", name: "Profile" },
  { path: "/logout", name: "Logout" },
];

export default function Navbar({ mode, setMode }: Prop) {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  let cartNumber = cartList.length;
  let wishNumber = wishList.length;

  const pages = [
    { name: "Home", path: "/" },
    { name: "Albums", path: "/albums" },
    { name: "Cart", path: "/cart", badgeNumber: cartNumber },
    { name: "Contact", path: "/" },
    { name: "Sign in", path: "/signin" },
  ];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const themeColorHandler = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#FFFFFF" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#6d0808" : "#48126a",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const [state, setState] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    state ? setState(false) : setState(true);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "primary.main", padding: "4px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MenuXs
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />
          <LogoXs />
          <NavItems handleCloseNavMenu={handleCloseNavMenu} pages={pages} />
          <Badge badgeContent={wishNumber} color="secondary">
            <Button
              variant="text"
              startIcon={<MdFavorite />}
              sx={{
                color: "white",
                display: "flex",
                fontWeight: "700",
              }}
              onClick={toggleDrawer}
            >
              <Typography variant="h6">wishList</Typography>
            </Button>
          </Badge>

          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={mode === "light" ? false : true}
            onClick={themeColorHandler}
          />
          <NavProfile
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
          />

         <Box sx={state? {display: "initial"}: {display: "none"}} ><WishListDrawer toggleDrawer={toggleDrawer} state={state} /></Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
