import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import loginSlice from "./login-slice";
import signupSlice from "./signup-slice";

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    login: loginSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
