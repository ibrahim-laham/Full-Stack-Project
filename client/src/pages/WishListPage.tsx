import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import WishItem from "../components/WishList/WishItem";

export default function WishListPage() {
  const wishList = useSelector((state: RootState) => state.wishList.wishList);

  return (
    <div>
      {wishList.map((wish) => (
        <WishItem wish={wish} key={wish._id} />
      ))}{" "}
    </div>
  );
}
