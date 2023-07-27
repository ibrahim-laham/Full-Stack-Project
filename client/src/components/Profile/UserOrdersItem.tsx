import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { ProductOrder } from "../../types/type";

type Prop = {
  item: ProductOrder;
};

export default function UserOrdersItem({ item }: Prop) {
  return (
    <Card sx={{ width: "100%" ,height: "100%", display: "flex",padding:"1vh"  }}>
      <CardActionArea sx={{ height: "100%", display: "flex",padding:"1vh", justifyContent: "space-between"  }}>
        <CardMedia
          component="img"
          height="140"
          image={item.image.albumArt}
          alt="green iguana"
          sx={{width: "70%"}}
        />
        <CardContent sx={{width: "30%"}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {item.price} Quantity: {item.quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
