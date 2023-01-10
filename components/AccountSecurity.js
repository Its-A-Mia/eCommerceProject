import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { profileActions } from "../store/profile-slice";
import {
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

  // show this category if chosen in menu

  // input states
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);
  const [password, setPassword] = useState(null);

  // show password states
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return !passwordCheckpointPassed ? (
    <Box display="flex" flexDirection="column" gap="10px" width="60%">
      <Typography>Update Your Email and/or Password</Typography>
      <Divider />
      <FormControl size="small">
        <InputLabel htmlFor="outlined-adornment-password" required>
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
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
      <Button variant="contained" sx={{ width: "100px" }}>
        submit
      </Button>
    </Box>
  ) : (
    <Box display="flex" flexDirection="column" gap="10px" width="60%">
      <Typography>Update Your Password</Typography>
      <Divider />
      <FormControl fullWidth size="small">
        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
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

      <Button variant="contained" sx={{ width: "100px" }}>
        Update
      </Button>
      <Typography>Update Your Email</Typography>
      <Divider />

      <FormControl display="flex" alignItems="center">
        <InputLabel size="small">Email</InputLabel>
        <OutlinedInput
          id="update-email"
          label="Email"
          aria-label="Update your name"
          size="small"
        ></OutlinedInput>
      </FormControl>

      <Button variant="contained" sx={{ width: "100px" }}>
        Update
      </Button>
    </Box>
  );
}
