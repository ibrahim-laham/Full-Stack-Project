import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
/* import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss'; */

import firstImage from "../assets/FirstThis.jpg";
import secondImage from "../assets/thisone3.jpg";
import thirdImage from "../assets/thisone4.jpg";
import Paper from "@mui/material/Paper";

{
  /* <Stack
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
      </Stack> */
}

const slider = (
  <AwesomeSlider animation="foldOutAnimation" /* cssModule={[coreStyles, animationStyles]} */>
    <div><img src={firstImage} /></div>
    <div><img src={secondImage}/></div>
    <div><img src={thirdImage}/></div>
  </AwesomeSlider>
);

export default function HomePage() {
  return (
    <Paper>{slider} </Paper>
  );
}
