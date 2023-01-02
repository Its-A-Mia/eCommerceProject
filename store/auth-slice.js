import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoggedOut: true,
  },
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
      state.isLoggedout = false;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
      state.isLoggedout = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
