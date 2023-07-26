import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import ShowCaseSlider from "../components/Home/ShowCaseSlider";
import LandingSlider from "../components/Home/LandingSlider";

export default function HomePage() {
  return (
    <Paper sx={{ minHeight: "93vh" }}>
      <Box component="div" style={{ marginBottom: "5%" }}>
        <LandingSlider />{" "}
      </Box>
      <Box component="div" style={{ padding: "2%" }}>
        <ShowCaseSlider />
      </Box>
    </Paper>
  );
}
