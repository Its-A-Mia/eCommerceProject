import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import loginSlice from "./login-slice";
import profileSlice from "./profile-slice";
import signupSlice from "./signup-slice";

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export default store;
