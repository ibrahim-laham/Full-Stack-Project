import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

type Prop = {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  settings: string[];
};

export default function NavProfile({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  settings,
}: Prop) {
  const avatars = [
    {
      alt: "man",
      link: "https://static.vecteezy.com/system/resources/previews/002/002/263/large_2x/black-man-with-beard-avatar-character-free-vector.jpg",
    },
    {
      alt: "man",
      link: "https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    {
      alt: "woman",
      link: "https://static.vecteezy.com/system/resources/previews/004/607/794/large_2x/the-girl-smiles-office-worker-the-woman-with-white-hair-office-manager-designer-entrepreneur-blonde-illustration-flat-avatar-vector.jpg",
    },
    {
      alt: "woman",
      link: "https://static.vecteezy.com/system/resources/previews/001/993/889/large_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    },
  ];

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="ibrahim"
            src={avatars[1].link}
          />
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
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
