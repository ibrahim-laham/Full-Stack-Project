import { useState } from "react";

import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { BiSolidRightArrow } from "react-icons/bi";
import { PiMusicNoteDuotone } from "react-icons/pi";
import Box from "@mui/material/Box";

import { Album } from "../../types/type";

type Prop = {
  item: Album;
};

export default function AlbumSlider({ item }: Prop) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  

  return (
    <Box
      sx={
        checked
          ? {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "flex",
              maxWidth: "45%",
            }
          : {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "flex",
              maxWidth: { xs: "20%", md: "10%", lg: "4%" },
            }
      }
    >
      <Button
        size="small"
        variant="contained"
        sx={{ backgroundColor: "background.default", height: "100%" }}
        onClick={handleChange}
      >
        <BiSolidRightArrow />
      </Button>
      <Collapse
        in={checked}
        orientation="horizontal"
        collapsedSize={0}
        sx={{ padding: "2vw" }}
        timeout={200}
      >
        <Fade in={checked} enter timeout={{ enter: 2500, exit: 0 }}>
          <div>
            <Typography variant="h4">
              <PiMusicNoteDuotone /> About the Artist:{" "}
            </Typography>
            <Typography variant="body1">{item.artistInfo}</Typography>
          </div>
        </Fade>
      </Collapse>
    </Box>
  );
}
