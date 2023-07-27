import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {
  avatars: {id: string; link:string}[];
  userAvatar: {id: string; link:string}[];
}

const profileState:ProfileState = {
  avatars: [
    {
      id: "1",
      link: "https://static.vecteezy.com/system/resources/previews/002/002/263/large_2x/black-man-with-beard-avatar-character-free-vector.jpg",
    },
    {
      id: "2",
      link: "https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    {
      id: "3",
      link: "https://static.vecteezy.com/system/resources/previews/004/607/794/large_2x/the-girl-smiles-office-worker-the-woman-with-white-hair-office-manager-designer-entrepreneur-blonde-illustration-flat-avatar-vector.jpg",
    },
    {
      id: "4",
      link: "https://static.vecteezy.com/system/resources/previews/001/993/889/large_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    },
  ],
  userAvatar: [{id: "1",link: "https://static.vecteezy.com/system/resources/previews/002/002/263/large_2x/black-man-with-beard-avatar-character-free-vector.jpg" }]
}

const ProfileSlice = createSlice({
  name: "profile",
  initialState:profileState,
  reducers: {
    changeAvatar: (state, action: PayloadAction<string>) => {
      state.userAvatar = state.avatars.filter(item => item.id === action.payload)
    }
  }
})

export const profileActions = ProfileSlice.actions;
const profileReducer = ProfileSlice.reducer;
export default profileReducer;