import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


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
            sx={{
              color: "white",
              display: "block",
              fontWeight: "700",
            }}
          >
            <Typography variant="h6">{page.name}</Typography>
          </Button>
        </Link>
      ))}
    </Box>
  );
}
