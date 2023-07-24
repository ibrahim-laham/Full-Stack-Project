import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { UserData } from "../../types/type";

type UserState = {
  userData: UserData;
};

const userState: UserState = {
  userData: { firstName: "",lastName: "", email: "", password: "", _id: "", __v: 0 },
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    storeUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
