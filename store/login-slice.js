import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    emailValidated: false,
    passwordValidated: false,
    showEmailError: false,
    showPasswordError: false,
    emailHelperText: null,
    passwordHelperText: null,
  },
  reducers: {
    emailValidation(state, action) {
      // check for no email input
      if (!action.payload.email) {
        state.emailValidated = false;
        state.showEmailError = true;
        state.emailHelperText = "Please type in your email";
        return;
      }
      // validates email input
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (emailRegex.test(action.payload.email) === false) {
        state.emailValidated = false;
        state.showEmailError = true;
        state.emailHelperText = "Invalid Email";
        return;
      }
      // reset
      state.showEmailError = false;
      // validation passed
      state.emailValidated = true;
    },
    passwordValidation(state, action) {
      // checks for no password input
      if (!action.payload.password) {
        state.passwordValidated = false;
        state.showPasswordError = true;
        state.passwordHelperText = "Please type in your password";
        return;
      }
      // reset
      state.passwordHelperText = null;
      state.showPasswordError = false;
      // Validation Passed
      state.passwordValidated = true;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
