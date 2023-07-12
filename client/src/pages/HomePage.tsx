import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function HomePage() {
  return (
    <div className="landingImage">
      <Stack
        sx={{
          width: "30%",
          height: "50%",
          position: "absolute",
          top: "25%",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "goldRush.light", fontWeight:"bold" }}>
          Live, Love, Music
        </Typography>
        <Typography variant="h6" color="white" align="center" sx={{marginTop: "10%"}}>
          {" "}
          we are proud to present you the best and the most popular albums in
          the world
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ width: "75%", top: "25%" }}
        >
          See Our Products
        </Button>
      </Stack>
    </div>
  );
}
