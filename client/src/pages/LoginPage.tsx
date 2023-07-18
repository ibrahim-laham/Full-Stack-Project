import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Modal from "@mui/material/Modal";

type UserInput = {
  nickName: string;
  email: string;
  password: string;
};

export default function LoginPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "secondary.main",
    color: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const createUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const endpoint = "http://localhost:8000/users";
    await axios
      .post(endpoint, userInput)
      .then((res) => {
       return res.status=== 200 ? handleOpen(): handleClose;
      })
      .catch((error) => console.log(error));
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              User has been created
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              An account has been created for you please login again.
            </Typography>
          </Box>
        </Modal>
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
            Login to your Account or Register
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
            <Button sx={{ color: "white", backgroundColor: "secondary.light" }}>
              Login{" "}
            </Button>
            <Button
              type="button"
              sx={{ color: "white", backgroundColor: "secondary.light" }}
              onClick={createUser}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Paper>
  );
}
