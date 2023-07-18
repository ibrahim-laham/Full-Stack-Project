import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {Link} from "react-router-dom"

import { Album } from "../../types/type";

type Prop = {
  album: Album;
};
;

export default function AlbumCard({ album }: Prop) {
  ;
  return (
    <Card sx={{ maxWidth: 345 ,backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) -15%, rgba(4,0,4,1) 90% );"}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={album.image?.albumArt}
      />
      <CardContent sx={{height: "25%"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{height: "40%", overflow: "hidden", textOverflow: "ellipsis" ,whiteSpace: "nowrap"}} >
          {album.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {album.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          short description of the album
        </Typography>
      </CardContent>
      <CardActions  >
        <Link to={`/albums/${album._id}`} style={{textDecoration : "none"}} ><Button size="small" sx={{color: "white"}}>Learn More</Button></Link>
        <Button size="small" sx={{color: "white"}}><FavoriteIcon  /> </Button>
        <Button size="small" sx={{color: "white"}}><ShoppingCartIcon/> </Button>
        <Typography sx={{marginLeft: "5px"}} >&#x20AC;{album.price}</Typography>
      </CardActions>
    </Card>
  );
}
