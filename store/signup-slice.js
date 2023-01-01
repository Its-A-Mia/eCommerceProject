import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    // check validation, then change validation state
    nameValidated: false,
    emailValidated: false,
    passwordValidated: false,
    // show error and message if not validated
    showNameError: false,
    showEmailError: false,
    showPasswordError: false,
    nameHelperText: null,
    emailHelperText: null,
    passwordHelperText: null,
  },
  reducers: {
    nameValidation(state, action) {
      // validates name input
      if (!action.payload.name) {
        state.nameValidated = false;
        state.showNameError = true;
        state.nameHelperText = "Name is required";
        return;
      }
      // reset
      state.showNameError = false;
      // validation passed
      state.nameValidated = true;
    },

    emailValidation(state, action) {
      // check for no email input
      if (!action.payload.email) {
        state.emailValidated = false;
        state.showEmailError = true;
        state.emailHelperText = "Email is required";
        return;
      }

      // validates email input
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (emailRegex.test(action.payload.email) === false) {
        state.emailValidated = false;
        state.showEmailError = true;
        state.emailHelperText = "Invalid Email";
        console.log(state.email);
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
        state.passwordHelperText = "Password is required";
        return;
      }

      // validates passwords match
      if (action.payload.password !== action.payload.confirmPassword) {
        state.passwordValidated = false;
        state.showPasswordError = true;
        state.passwordHelperText = "Passwords must match";
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

export const signupActions = signupSlice.actions;

export default signupSlice;
