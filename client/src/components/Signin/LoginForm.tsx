import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices/user"

type UserInput = {
  email: string;
  password: string;
}

export default function LoginForm() {
const navigate = useNavigate();
const dispatch= useDispatch();
const [userInput, setUserInput] = useState<UserInput>({
  email: "",
  password: "",
});

const storeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserInput({...userInput, email: e.target.value})
}

const storePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserInput({...userInput, password: e.target.value})
}

const loginHandler = async() => {
  const endpoint = "http://localhost:8000/users/login"
  
  await axios.post(endpoint, userInput)
  .then(res => {
    localStorage.setItem("Access_token",res.data.token)
    localStorage.setItem("userId", res.data.userData._id)
    dispatch(userActions.storeUserData(res.data.userData))
    navigate("/profile")
  })
  .catch(error => console.log(error))
  setUserInput({email: "", password: ""})
}

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" sx={{ color: "secondary.light" }}>
        {" "}
        Login to your Account:
      </Typography>
      <TextField
        required
        id="outlined-required"
        label="Email"
        autoComplete="email"
        onChange= {storeEmail}
      />
      <TextField
        required
        id="outlined-password-input"
        label="password"
        type="password"
        autoComplete="current-password"
        onChange={storePassword}
      />
      <Stack spacing={7} alignItems="center">
        <Button
          type="button"
          sx={{
            color: "white",
            backgroundColor: "secondary.light",
            marginTop: "2vh",
            width: "50%",
          }}
          onClick={loginHandler}
        >
          Login
        </Button>
        <Typography>
          if you dont have an Account register {" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <Typography sx={{ color: "secondary.light" }}>
              here
            </Typography>
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
