import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";

type UserInput = {
  nickName: string;
  email: string;
  password: string;
};

type Prop = {
  handleClose: () => void;
  handleOpen: () => void;
};

export default function RegisterForm({ handleClose, handleOpen }: Prop) {
  const [userInput, setUserInput] = useState<UserInput>({
    nickName: "",
    email: "",
    password: "",
  });

  const storeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, nickName: e.target.value });
  };

  const storeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, email: e.target.value });
  };
  const storePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, password: e.target.value });
  };


  const createUser = async () => {
    const endpoint = "http://localhost:8000/users";
    await axios
      .post(endpoint, userInput)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          return handleOpen();
           
        } else {
          return handleClose();
        }
      })
      .catch((error) => console.log(error));
    setUserInput({ nickName: "", email: "", password: "" });
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
      <Typography variant="h4" sx={{ color: "secondary.light" }}>
        {" "}
        Register a new account for you:
      </Typography>
      <TextField
        required
        id="outlined-required"
        label="Username"
        defaultValue="Username"
        onChange={storeUserName}
      />
      <TextField
        required
        id="outlined-required"
        label="Email"
        defaultValue="Email"
        onChange={storeEmail}
      />
      <TextField
        required
        id="outlined-password-input"
        label="password"
        type="password"
        autoComplete="current-password"
        onChange={storePassword}
      />
      <Stack direction="row" spacing={7}>
        <Button
          type="button"
          sx={{
            color: "white",
            backgroundColor: "secondary.light",
            marginTop: "2vh",
          }}
          onClick={createUser}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );
}
