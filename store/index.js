import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import filterSlice from "./filter-slice";
import loginSlice from "./login-slice";
import productViewSlice from "./productView-slice";
import profileSlice from "./profile-slice";
import signupSlice from "./signup-slice";
import sortSlice from "./sort-slice";

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    profile: profileSlice.reducer,
    filter: filterSlice.reducer,
    sort: sortSlice.reducer,
    productView: productViewSlice.reducer,
  },
});

export default store;
