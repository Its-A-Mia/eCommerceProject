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
} from "@mui/material";
import headerStyles from "../styles/Utils.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Auth() {
  // if token is available, change logged in state to true?

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Box width="60%">
        <Typography variant="h1" className={headerStyles.h1}>
          Sign In
        </Typography>
        <Box display="flex" border="gray solid 2px" p="20px" flexDirection="column" gap="20px">
          <FormControl fullWidth>
            <TextField id="outlined" fullWidth label="Email Address" required />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
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
          </FormControl>
          <Link href="/work-in-progress">Forgot your password?</Link>
          <Button variant="contained" href="/work-in-progress" fullWidth>
            Sign In
          </Button>
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
