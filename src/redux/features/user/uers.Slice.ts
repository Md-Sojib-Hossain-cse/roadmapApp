/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TUser = {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
  gender: "male" | "female" | "others" | null | undefined;
  accessToken: string | null | undefined;
};

const initialState: TUser = {
  name: null,
  email: null,
  image: null,
  gender: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<TUser>) => {
      return action.payload;
    },
    removeUser: (_state) => {
      return {
        name: null,
        email: null,
        image: null,
        gender: null,
        accessToken: null,
      };
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
