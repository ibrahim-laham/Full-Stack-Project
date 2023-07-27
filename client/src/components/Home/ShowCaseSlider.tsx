import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppDispatch, RootState } from "../../redux/store";
import AlbumCard from "../Albums/AlbumCard";
import { getAlbumsData } from "../../redux/thunk/albums";
import Paper from "@mui/material/Paper";

export default function ShowCaseSlider() {
  const albumsData = useSelector((state: RootState) => state.albums.albums);

  const appDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    appDispatch(getAlbumsData());
  }, [appDispatch]);
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    pauseOnFocus: true,
    draggable: true,
    centerMode: true,
    initialSlide: 2,
  };
  return (
    <Paper style={{ padding: "40px" }} elevation={6}>
      <Slider {...settings}>
        {albumsData.map((item) => (
          <div>
            <AlbumCard album={item} />{" "}
          </div>
        ))}
      </Slider>
    </Paper>
  );
}
