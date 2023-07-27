import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

type Prop = {
  open: boolean;
  handleClose: () => void;
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

export default function ChangeInfoModal({ handleClose, open }: Prop) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Your Information has been changed
          </Typography>
          <Typography id="transition-modal-description" variant="body1" sx={{ mt: 2 }}>
            check your new information on your profile page.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
