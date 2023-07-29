import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppDispatch, RootState } from "../../redux/store";
import AlbumCard from "../Albums/AlbumCard";
import { getAlbumsData } from "../../redux/thunk/albums";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

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
    adaptiveHeight: true,
    infinite: true,
    pauseOnFocus: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    draggable: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Paper style={{ padding: "2%" }} elevation={6}>
      <Slider {...settings} className="slick-slider" >
        {albumsData.map((item) => (
          <AlbumCard album={item} key={item._id} />
        ))}
      </Slider>
    </Paper>
  );
}
