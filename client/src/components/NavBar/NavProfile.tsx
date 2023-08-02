import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { RootState } from "../../redux/store";


type Prop = {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  settings: { path: string; name: string }[];
};

export default function NavProfile({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  settings,
}: Prop) {

  const avatar = useSelector((state: RootState) => state.profile.userAvatar);
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {avatar.map((item) => (
            <Avatar alt="ibrahim" src={item.link} key={item.id} />
          ))}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <Link
            key={setting.name}
            to={setting.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem onClick={(event)=> {
              handleCloseUserMenu(event);
              }}>
              <Typography textAlign="center">{setting.name}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}
