import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

type Prop = {
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  pages: {
    [key: string]: string;
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
        <Link to={`${page.path}`} style={{ textDecoration: "none" }}>
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              variant="text"
              
              sx={{
                color: "white",
                display: "flex",
                fontWeight: "700",
              }}
              startIcon={page.name === "Albums" ? <AlbumRoundedIcon  />  : 
              page.name === "Home" ? <HomeRoundedIcon /> :
              page.name === "Contact" ? <CallRoundedIcon /> :
              page.name === "Login" ? <LoginRoundedIcon /> : null
            }
            >
              <Typography variant="h6">{page.name}</Typography>
            </Button>
        </Link>
      ))}
    </Box>
  );
}
