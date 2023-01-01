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
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import utilStyles from "../styles/Utils.module.css";
import Link from "next/link";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signupActions } from "../store/signup-slice";
import { redirect } from "next/dist/server/api-utils";

export default function SignUp() {
  // grab dispatch from Redux
  const dispatch = useDispatch();
  // mediaQuery for RWD
  const matches = useMediaQuery("(min-width: 600px)");
  // Grab needed states from redux store
  const showNameError = useSelector((state) => state.signup.showNameError);
  const showEmailError = useSelector((state) => state.signup.showEmailError);
  const showPasswordError = useSelector((state) => state.signup.showPasswordError);
  const nameHelperText = useSelector((state) => state.signup.nameHelperText);
  const emailHelperText = useSelector((state) => state.signup.emailHelperText);
  const passwordHelperText = useSelector((state) => state.signup.passwordHelperText);
  const nameValidated = useSelector((state) => state.signup.nameValidated);
  const emailValidated = useSelector((state) => state.signup.emailValidated);
  const passwordValidated = useSelector((state) => state.signup.passwordValidated);

  // create states for page inputs
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  // sets state for password/showing hidden password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // catch error output states
  const [createAcctErr, setCreateAcctErr] = useState(null);
  const [errSeverity, setErrSeverity] = useState(null);

  // post account to db
  const handleSubmit = async () => {
    if (emailValidated === false || passwordValidated === false || nameValidated === false) {
      return;
    }
    // once all sections are validated, pass through to submit the form
    try {
      const result = await axios.post("/api/user", {
        //verbose destructuring to show what is being sent
        name: name,
        email: email,
        password: password,
      });
      setCreateAcctErr("Account creation successful! You will be redirected to the login page...");
      setErrSeverity("success");
      setTimeout(() => (window.location = "/auth"), 2000);
    } catch (error) {
      setCreateAcctErr(error.request.response);
      setErrSeverity("error");
    }
  };

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
              onBlur={() => dispatch(signupActions.nameValidation({ name: name }))}
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
              onBlur={() => dispatch(signupActions.emailValidation({ email }))}
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
                onKeyUp={(e) => setPassword(e.target.value)}
                onBlur={() =>
                  dispatch(signupActions.passwordValidation({ password, confirmPassword }))
                }
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
                onKeyUp={(e) => setConfirmPassword(e.target.value)}
                onBlur={() =>
                  dispatch(signupActions.passwordValidation({ password, confirmPassword }))
                }
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
          {!createAcctErr ? null : <Alert severity={errSeverity}>{createAcctErr}</Alert>}

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
