import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import RegisterModal from "../components/Signin/RegisterModal";
import RegisterForm from "../components/Signin/RegisterForm";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    navigate("/signin");
    setOpen(false);
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
        <RegisterModal open={open} handleClose={handleClose} />
        <RegisterForm  setOpen={setOpen} />
      </Paper>
    </Paper>
  );
}
