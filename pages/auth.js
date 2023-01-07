import { useState } from "react";
import { Box } from "@mui/system";
import {
  Typography,
  TextField,
  Divider,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormHelperText,
  Alert,
} from "@mui/material";
import headerStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/login-slice";
import axios from "axios";

export default function Auth() {
  const dispatch = useDispatch();
  // Grab needed states from redux store
  const showEmailError = useSelector((state) => state.login.showEmailError);
  const showPasswordError = useSelector((state) => state.login.showPasswordError);
  const emailHelperText = useSelector((state) => state.login.emailHelperText);
  const passwordHelperText = useSelector((state) => state.login.passwordHelperText);
  const emailValidated = useSelector((state) => state.login.emailValidated);
  const passwordValidated = useSelector((state) => state.login.passwordValidated);

  // create states for page inputs
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // sets state for password/showing hidden password
  const [showPassword, setShowPassword] = useState(false);

  // catch error output states
  const [createAcctErr, setCreateAcctErr] = useState(null);
  const [errSeverity, setErrSeverity] = useState(null);

  // post login request
  const handleLogin = async () => {
    if (emailValidated === false || passwordValidated === false) {
      return;
    }

    try {
      const { data } = await axios.post("/api/auth", {
        email,
        password,
      });

      document.cookie = `sessionActive=true;secure;samesite=lax;max-age=900`;

      setCreateAcctErr("Login successful! You will be redirected to the home page...");
      setErrSeverity("success");
      setTimeout(() => (window.location = "/"), 2000);
    } catch (error) {
      setCreateAcctErr(error.request.response);
      setErrSeverity("error");
    }
  };

  return (
    <>
      <Box width="60%">
        <Typography variant="h1" className={headerStyles.h1}>
          Sign In
        </Typography>
        <Box display="flex" border="gray solid 2px" p="20px" flexDirection="column" gap="20px">
          <FormControl fullWidth>
            <TextField
              id="outlined"
              fullWidth
              label="Email Address"
              onKeyUp={(e) => setEmail(e.target.value)}
              onBlur={() => dispatch(loginActions.emailValidation({ email }))}
              error={showEmailError}
              helperText={showEmailError ? emailHelperText : null}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onKeyUp={(e) => setPassword(e.target.value)}
              onBlur={() => dispatch(loginActions.passwordValidation({ password }))}
              error={showPasswordError}
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
          <Link href="/work-in-progress">Forgot your password?</Link>
          <Button variant="contained" onClick={handleLogin} fullWidth>
            Sign In
          </Button>
          {!createAcctErr ? null : <Alert severity={errSeverity}>{createAcctErr}</Alert>}

          <Divider />
          <Typography>New to eShop?</Typography>
          <Button variant="outlined" href="/signup" fullWidth>
            Create Account
          </Button>
        </Box>
      </Box>
    </>
  );
}
