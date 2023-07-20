import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

type Prop = {
  open: boolean;
  handleClose: ()=> void;
}


export default function RegisterModal({handleClose, open}:Prop) {
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

  return (
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
  );
}
