import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { PiMusicNoteDuotone } from "react-icons/pi";

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
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "flex",
        minWidth: "4%",
        maxWidth: "50%"
      }}
    >
      <Button
        size="small"
        variant="contained"
        sx={{ backgroundColor: "background.default" }}
        onClick={handleChange}
      >
        <BiSolidRightArrow />
      </Button>
      <Collapse
        in={checked}
        orientation="horizontal"
        collapsedSize={0}
        sx={{ padding: "2vw" }}
      >
        <Typography variant="h4">
          <PiMusicNoteDuotone /> About the Artist:{" "}
        </Typography>
        <Typography variant="body1">{item.artistInfo}</Typography>
      </Collapse>
    </Box>
  );
}
