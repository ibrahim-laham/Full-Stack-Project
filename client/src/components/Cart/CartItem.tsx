import Card from "@mui/material/Card";

import { Album } from "../../types/type";
import ItemCardArea from "./ItemCardArea";
import ItemCardActions from "./ItemCardActions";

type Prop = {
  item: Album;
};

export default function CartItem({ item }: Prop) {
  return (
    
      <Card sx={{ height: "100%", display: "flex",padding:"1vh" }}>
        <ItemCardArea item={item} />
        <ItemCardActions item={item} />
      </Card>
    
  );
}
