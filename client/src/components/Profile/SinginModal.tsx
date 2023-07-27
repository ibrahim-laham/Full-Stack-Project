import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import { style } from "./ChangeInfoModal";

type Prop = {
  handleClose: () => void;
};

export default function SinginModal({ handleClose }: Prop) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={true}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={true}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            You are not signed in to your account
          </Typography>
          <Typography
            id="transition-modal-description"
            variant="body1"
            sx={{ mt: 2 }}
          >
            please register a new account or singin to you existing account.
            Thank you
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
