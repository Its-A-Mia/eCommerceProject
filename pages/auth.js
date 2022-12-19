import { Box } from "@mui/system";
import { Typography, TextField, Divider } from "@mui/material";
import headerStyles from "../styles/Headings.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function cart() {
  return (
    <>
      <Box width="60%">
        <Typography variant="h1" className={headerStyles.h1}>
          Sign In
        </Typography>
        <Box display="flex" border="gray solid 2px" p="20px" flexDirection="column" gap="20px">
          <TextField id="outlined" fullWidth label="Email Address" required />
          <TextField id="outlined" fullWidth label="Password" required />
          <Link href="/work-in-progress">Forgot your password?</Link>
          <Button variant="contained" href="/work-in-progress" fullWidth>
            Sign In
          </Button>
          <Divider />
          <Typography>New to eCommerce World?</Typography>
          <Button variant="outlined" href="/work-in-progress" fullWidth>
            Create Account
          </Button>
        </Box>
      </Box>
    </>
  );
}
