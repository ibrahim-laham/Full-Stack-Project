import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {FaWikipediaW} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"

import { Album } from "../../types/type";

type Prop = {
  item: Album;
};

export default function albumDetailsCard({ item }: Prop) {
  return (
    <Card sx={{ width: "100%" ,height: "100%" }}>
      <CardMedia
        sx={{ height: "50%" }}
        image={item.image?.albumArt}
        title={item.title}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions  >
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <a href={item.link?.spotify} target="_blank" rel="noreferrer">
            <BsSpotify style={{ color: "springgreen" }} />
          </a>{" "}
        </IconButton>
        <IconButton>
          <a href={item.link?.youtube} target="_blank" rel="noreferrer">
            <BsYoutube style={{ color: "red" }} />
          </a>{" "}
        </IconButton>
        <IconButton>
          <a href={item.link?.wikipedia} target="_blank" rel="noreferrer"  >
            <FaWikipediaW style={{color: "white"}}/>
          </a>
        </IconButton>
        <IconButton>
          <a href={item.rating?.pitchforkLink} target="_blank" rel="noreferrer">
            <AiOutlineStar style={{color: "gold"}}/>
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
