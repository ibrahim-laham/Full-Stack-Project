import axios from "axios";
import { AppDispatch } from "../store";
import { userActions } from "../slices/user";

export function getUserDetails(userId: string) {
  const url = `https://full-stack-project-backend-e3xz.onrender.com/users/${userId}`;
  return async (dispatch: AppDispatch) => {
    try {
      await axios
        .get(url)
        .then((res) => dispatch(userActions.storeUserData(res.data.user)))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
}
