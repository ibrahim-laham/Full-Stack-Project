import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai"

import {cartActions} from "../../redux/slices/cart"
import { Album } from "../../types/type";

type Prop = {
  item: Album;
};

export default function ItemCardActions({item}:Prop) {
  const dispatch= useDispatch();

  function increaseQuantity () {
    dispatch(cartActions.increaseQuantity(item))
  }

  function decreaseQuantity () {
    dispatch(cartActions.decreaseQuantity(item))
  }

  return (
    <CardActions sx={{ width: "30%" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
        spacing={5}
      >
        <Button size="large" variant="contained" sx={{ width: "50%" }}>
          <Typography variant="body1">remove</Typography>{" "}
        </Button>
        <Button size="large" variant="contained" sx={{ width: "50%" }}>
          <Typography variant="body1">view Item</Typography>
        </Button>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{alignItems: "center", justifyContent: "space-evenly", width: "50%"}}
        >
          <IconButton sx={{backgroundColor: "primary.main"}} onClick={increaseQuantity} ><AiOutlinePlusCircle /></IconButton>
          <Typography>{item.quantity} </Typography>
          <IconButton sx={{backgroundColor: "primary.main"}} onClick={decreaseQuantity}><AiOutlineMinusCircle/> </IconButton>
        </ButtonGroup>
      </Stack>
    </CardActions>
  );
}
