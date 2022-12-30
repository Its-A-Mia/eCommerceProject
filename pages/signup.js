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
  TextField,
  Typography,
} from "@mui/material";
import utilStyles from "../styles/Utils.module.css";
import Link from "next/link";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

export default function SignUp() {
  //sets state for name
  const [name, setName] = useState(null);

  //sets state for email input
  const [email, setEmail] = useState(null);

  //sets state for password/showing hidden password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  //validation states for each input
  const [nameValidated, setNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);

  //states to show specific input error
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  //error helperText to display
  const [nameHelperText, setNameHelperText] = useState(null);
  const [emailHelperText, setEmailHelperText] = useState(null);
  const [passwordHelperText, setPasswordHelperText] = useState(null);

  const nameValidation = () => {
    // validates name input
    if (!name) {
      setNameValidated(false);
      setShowNameError(true);
      setNameHelperText("Name is required");
      return;
    }
    // reset
    setNameValidated(true);
    // validation passed
    setShowNameError(false);
  };

  const emailValidation = (e) => {
    // check for no email input
    if (!email) {
      setEmailValidated(false);
      setShowEmailError(true);
      setEmailHelperText("Email is required");
      return;
    }

    // validates email input
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (emailRegex.test(email) === false) {
      setEmailValidated(false);
      setShowEmailError(true);
      setEmailHelperText("Invalid Email");
      return;
    }
    // reset
    setShowEmailError(false);
    // validation passed
    setEmailValidated(true);
  };

  const passwordValidation = () => {
    // checks for no password input
    if (!password) {
      setPasswordValidated(false);
      setShowPasswordError(true);
      setPasswordHelperText("Password is required");
      return;
    }

    // validates passwords match
    if (password !== confirmPassword) {
      setPasswordValidated(false);
      setShowPasswordError(true);
      setPasswordHelperText("Passwords must match");
      return;
    }
    // reset
    setPasswordHelperText(null);
    setShowPasswordError(false);
    // Validation Passed
    setPasswordValidated(true);
  };

  const handleSubmit = async () => {
    if (emailValidated === false || passwordValidated === false || nameValidated === false) {
      return;
    }

    try {
      const result = await axios.post("/api/user", {
        //verbose to show what is being sent
        name: name,
        email: email,
        password: password,
      });

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // if validated setAllowSubmit?

  return (
    <>
      <Box width="60%">
        <Typography variant="h1" className={utilStyles.h1}>
          Create Account
        </Typography>
        <Box display="flex" border="gray solid 2px" p="20px" flexDirection="column" gap="20px">
          <FormControl fullWidth sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
              id="outlined"
              label="Name"
              name="name"
              error={showNameError}
              helperText={showNameError ? nameHelperText : null}
              onKeyUp={(e) => setName(e.target.value)}
              onBlur={() => nameValidation()}
              fullWidth
              required
            />
            <TextField
              id="outlined"
              label="Email Address"
              name="email"
              error={showEmailError}
              helperText={showEmailError ? emailHelperText : null}
              onKeyUp={(e) => setEmail(e.target.value)}
              onBlur={(e) => emailValidation(e)}
              fullWidth
              required
            />
            <FormControl fullWidth>
              <InputLabel
                htmlFor="outlined-adornment-password"
                helperText={showPasswordError ? passwordHelperText : null}
                required
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                error={showPasswordError}
                onBlur={(e) => passwordValidation(e)}
                onKeyUp={(e) => setPassword(e.target.value)}
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
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password-confirm" required>
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-confirm"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                name="confirmedPassword"
                error={showPasswordError}
                onBlur={passwordValidation}
                onKeyUp={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      onMouseDown={(e) => e.preventDefault}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                required
              />
            </FormControl>
            <Button variant="outlined" onClick={() => handleSubmit()} fullWidth>
              Create Account
            </Button>
          </FormControl>

          <Divider />
          <Box display="flex" gap="5px">
            <Typography variant="body1">Already have an account?</Typography>
            <Link href="/auth">Sign in</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
