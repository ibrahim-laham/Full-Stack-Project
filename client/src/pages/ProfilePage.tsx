import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import ChangeUserInfo from "../components/Signin/ChangeUserInfo";
import { getUserDetails } from "../redux/thunk/userDetails";

export default function ProfilePage() {
  const userData = useSelector((state: RootState) => state.user.userData);
  const [open, setOpen] = useState<boolean>(false);

  const appDispatch = useDispatch<AppDispatch>();
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    appDispatch(getUserDetails(userId as string));
  }, [appDispatch, userId]);

  const ChangeButtonHandler = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Paper
      sx={{
        minHeight: "93vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={12} sx={{ minWidth: "30vw", minHeight: "30vh" }}>
        <Typography variant="h5">Username: {userData?.nickName} </Typography>
        <Typography variant="h5">Email: {userData?.email} </Typography>
        <Typography variant="h5">Id: {userData?._id} </Typography>
        <Button onClick={ChangeButtonHandler}>Change user information</Button>
        {open ? <ChangeUserInfo /> : null}
      </Paper>
    </Paper>
  );
}
