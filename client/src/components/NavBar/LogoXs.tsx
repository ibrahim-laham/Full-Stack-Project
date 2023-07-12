import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";


export default function LogoXs() {
  return (
    <Box sx={{display: { xs: "flex", md: "none" },flexGrow: 1,}}>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
}
