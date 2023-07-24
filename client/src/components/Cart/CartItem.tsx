import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Album } from "../../types/type";
import CardActionArea from "@mui/material/CardActionArea";

type Prop = {
  item: Album;
};

export default function CartItem({ item }: Prop) {
  return (
    <Grid item md={12} lg={12}>
      <Card sx={{ width: "100%", display: "flex" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
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
        </CardActionArea>
        <CardActions>
          <Button size="small">remove</Button>
          <Button size="small">view Item</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
