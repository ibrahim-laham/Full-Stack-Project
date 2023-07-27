import { useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import ChangeUserInfo from "./ChangeUserInfo";

import { UserData } from "../../types/type";
import { GoldButton } from "../../App";


type Prop = {
  userData: UserData;
};

export default function UserInfo({ userData }: Prop) {
  const [open, setOpen] = useState<boolean>(false);
  const ChangeButtonHandler = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <Paper
      elevation={12}
      sx={{
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ width: "100%", overflow: "hidden" }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            gap: "30%",
          }}
        >
          <Stack>
            <Typography
              variant="h5"
              sx={{ display: "inline-block", color: "goldRush.main" }}
            >
              First name:
            </Typography>
            <Typography
              variant="h5"
              color="Highlight"
              sx={{ display: "inline-block", color: "goldRush.main" }}
            >
              Email:
            </Typography>
            <Typography
              variant="h5"
              color="Highlight"
              sx={{ display: "inline-block", color: "goldRush.main" }}
            >
              User Id:
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">{userData?.firstName}</Typography>
            <Typography variant="h5">{userData?.email}</Typography>
            <Typography variant="h5">{userData?._id}</Typography>
          </Stack>
        </Box>

        <GoldButton
          onClick={ChangeButtonHandler}
          variant="contained"
          sx={{ backgroundColor: "goldRush.main" }}
        >
          Change user information
        </GoldButton>
        {open ? <ChangeUserInfo /> : null}
      </Stack>
    </Paper>
  );
}
