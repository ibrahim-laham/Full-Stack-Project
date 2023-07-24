import { Album } from "../../types/type";

type Prop = {
  wish: Album;
};

export default function WishItem({ wish }: Prop) {
  return <div>{wish.title} </div>;
}
