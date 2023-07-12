import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import Logo from "./Logo";
import MenuXs from "./MenuXs";
import LogoXs from "./LogoXs";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";

const pages = [
  { name: "Albums", path: "/albums" },
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/" },
  { name: "login", path: "/" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
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

  return (
    <AppBar position="static" color="primary">
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
          <NavProfile
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
