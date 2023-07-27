import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import { RootState } from "../../redux/store";
import { profileActions } from "../../redux/slices/profile";
import { GoldButton } from "../../App";

export default function UserAvatar() {
  const avatars = useSelector((state: RootState) => state.profile.avatars);
  const userAvatar = useSelector(
    (state: RootState) => state.profile.userAvatar
  );

  const [avatar, setAvatar] = useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setAvatar(event.target.value as string);
  };
  const dispatch = useDispatch();

  const changeAvatar = () => {
    dispatch(profileActions.changeAvatar(avatar));
  };
  return (
    <Stack spacing={5}>
      <Box component="div" sx={{ width: "10vw", clipPath: "circle(45%)" }}>
        {" "}
        {userAvatar.map((item) => (
          <Box
            component="img"
            src={item.link}
            sx={{ objectFit: "contain", width: "100%" }}
            key={item.id}
          />
        ))}{" "}
      </Box>
      <Box sx={{ minWidth: 120 }}>
        {" "}
        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Avatar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={avatar}
              label="Avatar"
              onChange={handleChange}
              sx={{ width: "100%" }}
            >
              {avatars.map((item) => (
                <MenuItem value={item.id} sx={{ width: "100%" }} key={item.id}>
                  <img style={{ width: "2vw" }} src={item.link} alt="avatar" />{" "}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <GoldButton onClick={changeAvatar}>Change</GoldButton>
        </Stack>
      </Box>
    </Stack>
  );
}
