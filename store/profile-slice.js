import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    // check validation, then change validation state
    newNameValidated: false,
    newEmailValidated: false,
    newPasswordValidated: false,
    PasswordValidated: false,
    // show error and message if not validated
    showNewNameError: false,
    showNewEmailError: false,
    showNewPasswordError: false,
    showPasswordError: false,
    //   messages
    nameHelperText: null,
    emailHelperText: null,
    newPasswordHelperText: null,
    PasswordHelperText: null,
  },
  reducers: {
    newNameValidation(state, action) {
      // validates name input
      if (!action.payload.newName) {
        state.newNameValidated = false;
        state.showNewNameError = true;
        state.newNameHelperText = "New name is required";
        return;
      }
      // reset
      state.showNewNameError = false;
      // validation passed
      state.newNameValidated = true;
    },
    newEmailValidation(state, action) {
      // check for no email input
      if (!action.payload.newEmail) {
        state.newEmailValidated = false;
        state.showNewEmailError = true;
        state.newEmailHelperText = "Email is required";
        return;
      }

      // validates email input
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (emailRegex.test(action.payload.newEmail) === false) {
        state.newEmailValidated = false;
        state.showNewEmailError = true;
        state.newEmailHelperText = "Invalid Email";
        return;
      }

      // reset
      state.showNewEmailError = false;
      state.newEmailHelperText = null;
      // validation passed
      state.newEmailValidated = true;
    },
    newPasswordValidation(state, action) {
      // validates passwords match
      if (action.payload.newPassword !== action.payload.confirmNewPassword) {
        state.newPasswordValidated = false;
        state.showNewPasswordError = true;
        state.newPasswordHelperText = "Passwords must match";
        return;
      }
      // reset
      state.newPasswordHelperText = null;
      state.showNewPasswordError = false;
      // Validation Passed
      state.newPasswordValidated = true;
    },
    passwordValidation(state, action) {
      if (!action.payload.password) {
        state.passwordValidated = false;
        state.showPasswordError = true;
        state.passwordHelperText = "Password is required to update password and/or email";
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

export const profileActions = profileSlice.actions;

export default profileSlice;
