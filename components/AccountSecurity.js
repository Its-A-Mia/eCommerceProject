import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { profileActions } from "../store/profile-slice";
import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function AccountSecurity() {
  const dispatch = useDispatch();

  // boolean for if password inputted is correct
  const [passwordCheckpointPassed, setPasswordCheckpointPassed] = useState(false);

  // grab redux states
  const passwordValidated = useSelector((state) => state.profile.passwordValidated);
  const showPasswordError = useSelector((state) => state.profile.showPasswordError);
  const passwordHelperText = useSelector((state) => state.profile.passwordHelperText);

  const showNewEmailError = useSelector((state) => state.profile.showNewEmailError);
  const newEmailHelperText = useSelector((state) => state.profile.newEmailHelperText);
  const newEmailValidated = useSelector((state) => state.profile.newEmailValidated);

  const showNewPasswordError = useSelector((state) => state.profile.showNewPasswordError);
  const newPasswordHelperText = useSelector((state) => state.profile.newPasswordHelperText);
  const newPasswordValidated = useSelector((state) => state.profile.newPasswordValidated);

  // input states
  const [password, setPassword] = useState(null);

  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);

  // show password states
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // catch error output states
  const [passwordErr, setPasswordErr] = useState(null);
  const [errSeverity, setErrSeverity] = useState(null);

  // new password
  const [updatePasswordErr, setUpdatePasswordErr] = useState(null);
  const [passwordErrSeverity, setPasswordErrSeverity] = useState(null);

  //  new email
  const [updateEmailErr, setUpdateEmailErr] = useState(null);
  const [emailErrSeverity, setEmailErrSeverity] = useState(null);

  // reset password input since it carries over into other from
  useEffect(() => {
    if (passwordCheckpointPassed) {
      document.getElementById("outlined-adornment-new-password").value = "";
    }
  }, [passwordCheckpointPassed]);

  // authentication of password
  const handlePasswordSubmit = async () => {
    try {
      await axios.post("/api/auth/profile", {
        password,
      });
      setPasswordErr("Password authenticated.");
      setErrSeverity("success");
      setTimeout(() => {
        setPasswordCheckpointPassed(true);
      }, 1200);
    } catch (error) {
      setPasswordErr("Incorrect Password");
      setErrSeverity("error");
    }
  };

  // update password
  const handleNewPasswordUpdate = async () => {
    if (!newPasswordValidated) {
      return;
    }
    try {
      await axios.patch("/api/user", {
        newPassword,
        toUpdate: "password",
      });

      setUpdatePasswordErr("Update Successful!");
      setPasswordErrSeverity("success");
    } catch (error) {
      setUpdatePasswordErr(error.request.response);
      setPasswordErrSeverity("error");
    }
  };

  // update email
  const handleNewEmailUpdate = async () => {
    if (!newEmailValidated) {
      return;
    }

    try {
      await axios.patch("/api/user", {
        newEmail,
        toUpdate: "email",
      });

      // setTimeout(() => location.reload(), 2000);
      setUpdateEmailErr("Update Successful!");
      setEmailErrSeverity("success");
    } catch (error) {
      setUpdateEmailErr(error.request.response);
      setEmailErrSeverity("error");
    }
  };

  return !passwordCheckpointPassed ? (
    <Box display="flex" flexDirection="column" gap="10px" width="60%">
      <Typography>Update Your Email and/or Password</Typography>
      <Divider />
      <FormControl size="small">
        <InputLabel htmlFor="outlined-adornment-password" required>
          Enter Your Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Enter Your Password"
          error={showPasswordError}
          onKeyUp={(e) => setPassword(e.target.value)}
          onBlur={() => dispatch(profileActions.passwordValidation({ password }))}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          required
        />
        <FormHelperText disabled={showPasswordError} error>
          {passwordHelperText}
        </FormHelperText>
      </FormControl>
      <Button variant="contained" onClick={() => handlePasswordSubmit()} sx={{ width: "100px" }}>
        submit
      </Button>
      {!passwordErr ? null : <Alert severity={errSeverity}>{passwordErr}</Alert>}
    </Box>
  ) : (
    <Box display="flex" flexDirection="column" gap="10px" width="60%">
      <Typography>Update Your Password</Typography>
      <Divider />
      <FormControl fullWidth size="small">
        <InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-new-password"
          name="newPassword"
          type={showNewPassword ? "text" : "password"}
          label="New Password"
          error={showNewPasswordError}
          onKeyUp={(e) => setNewPassword(e.target.value)}
          onBlur={() =>
            dispatch(profileActions.newPasswordValidation({ newPassword, confirmNewPassword }))
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowNewPassword(!showNewPassword)}
                onMouseDown={(e) => e.preventDefault}
              >
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText disabled={showNewPasswordError} error>
          {newPasswordHelperText}
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel htmlFor="outlined-adornment-password-confirm">Confirm New Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password-confirm"
          type={showConfirmNewPassword ? "text" : "password"}
          label="Confirm New Password"
          name="confirmedPassword"
          error={showNewPasswordError}
          onKeyUp={(e) => setConfirmNewPassword(e.target.value)}
          onBlur={() =>
            dispatch(profileActions.newPasswordValidation({ newPassword, confirmNewPassword }))
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                onMouseDown={(e) => e.preventDefault}
              >
                {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" onClick={() => handleNewPasswordUpdate()} sx={{ width: "100px" }}>
        Update
      </Button>
      {!updatePasswordErr ? null : (
        <Alert severity={passwordErrSeverity}>{updatePasswordErr}</Alert>
      )}
      <Typography>Update Your Email</Typography>
      <Divider />

      <FormControl display="flex" alignItems="center">
        <InputLabel size="small">Email</InputLabel>
        <OutlinedInput
          id="update-email"
          label="Email"
          aria-label="Update your name"
          size="small"
          error={showNewEmailError}
          onKeyUp={(e) => setNewEmail(e.target.value)}
          onBlur={() => dispatch(profileActions.newEmailValidation({ newEmail }))}
        ></OutlinedInput>
        <FormHelperText disabled={showNewEmailError} error>
          {newEmailHelperText}
        </FormHelperText>
      </FormControl>

      <Button variant="contained" onClick={() => handleNewEmailUpdate()} sx={{ width: "100px" }}>
        Update
      </Button>
      {!updateEmailErr ? null : <Alert severity={emailErrSeverity}>{updateEmailErr}</Alert>}
    </Box>
  );
}
