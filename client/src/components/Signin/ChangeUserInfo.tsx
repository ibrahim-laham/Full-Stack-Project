import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { RootState } from "../../redux/store";
import { UserData } from "../../types/type";
import { userActions } from "../../redux/slices/user";

export default function ChangeUserInfo() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);
  const { nickName, email, password, _id, __v } = userData;
  const [userInput, setUserInput] = useState<UserData>({
    nickName: nickName,
    email: email,
    password: password,
    _id: _id,
    __v: __v,
  });
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, password: e.target.value });
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, email: e.target.value });
  };
  const nickNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, nickName: e.target.value });
  };

  const submitChangeHandler = async () => {
    const endpoint = `http://localhost:8000/users/${userData._id}`;
    const token = localStorage.getItem("Access_token");
    await axios
      .put(endpoint, userInput, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.user);
        dispatch(userActions.storeUserData(res.data.user));
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Username"
        onChange={nickNameChangeHandler}
      />
      <TextField
        required
        id="outlined-required"
        label="Email"
        onChange={emailChangeHandler}
      />
      <TextField
        required
        id="outlined-password-input"
        label="password"
        type="password"
        autoComplete="current-password"
        onChange={passwordChangeHandler}
      />
      <Button onClick={submitChangeHandler}>Submit Change</Button>
    </Box>
  );
}
