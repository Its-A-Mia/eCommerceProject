import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import signupSlice from "./signup-slice";

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
