import ReactPlayer from "react-player";

import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

import video from "../../assets/videoplayback_Trim_Trim.mp4";
import video2 from "../../assets/videoplayback (2).mp4";
import video3 from "../../assets/videoplayback (3).mp4";

export default function LandingSlider () {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return <AutoplaySlider
  fillParent={false}
  play={true}
  cssModule={AwsSliderStyles}
  animation="openAnimation"
  cancelOnInteraction={true}
  interval={6000}
  style={{ height: "89vh" }}
>
  <div style={{ height: "89vh" }}>
    <ReactPlayer
      playing={true}
      loop={true}
      muted={true}
      controls={false}
      url={video3}
      width="120vw"
      height="120vh"
      style={{ objectFit: "contain" }}
    />
  </div>
  <div style={{ height: "89vh" }}>
    <ReactPlayer
      playing={true}
      loop={true}
      muted={true}
      controls={false}
      url={video}
      width="120vw"
      height="120vh"
      style={{ objectFit: "contain" }}
    />
  </div>
  <div style={{ height: "89vh" }}>
    <ReactPlayer
      playing={true}
      loop={true}
      muted={true}
      controls={false}
      url={video2}
      width="120vw"
      height="110vh"
      style={{ objectFit: "contain" }}
    />
  </div>
</AutoplaySlider>
}