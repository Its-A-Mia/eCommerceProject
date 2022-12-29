import {
  Box,
  Button,
  Divider,
  FormControl,
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

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Box width="60%">
        <Typography variant="h1" className={utilStyles.h1}>
          Create Account
        </Typography>
        <Box display="flex" border="gray solid 2px" p="20px" flexDirection="column" gap="20px">
          <FormControl fullWidth sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField id="outlined" fullWidth label="Email Address" required />
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showConfirmPassword ? "text" : "password"}
                label="Password"
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
          </FormControl>
          <Button variant="outlined" fullWidth>
            Create Account
          </Button>
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
