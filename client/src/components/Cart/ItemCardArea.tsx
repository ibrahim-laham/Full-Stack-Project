import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Album } from "../../types/type";

type Prop = {
  item: Album;
};

export default function ItemCardArea ({item}:Prop) {
  return <CardActionArea>
  <Stack direction="row" sx={{width: "75%"}} >
    <CardMedia
      component="img"
      alt="green iguana"
      sx={{width: "30%", objectFit: "cover", objectPosition: "center"}}
      image={item.image.vinyl}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
    </CardContent>
  </Stack>
</CardActionArea>
}