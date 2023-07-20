import Paper from "@mui/material/Paper";
import LoginForm from "../components/Signin/LoginForm";

export default function SigninPage () {

 

  return <Paper
  sx={{
    minHeight: "93vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Paper elevation={12} sx={{ minWidth: "30vw", minHeight: "30vh" }}>
    <LoginForm/>
  </Paper>
</Paper>
}