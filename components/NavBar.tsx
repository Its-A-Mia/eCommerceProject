import { Grid, Box, Divider, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";

export default function () {
  return (
    <>
      <Box bgcolor="#EEEEEE">
        <Container>
          <Grid container spacing={5} p="20px">
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" gap="50px" alignItems="center">
                <Link href="/work-in-progress">Link</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Link</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Link</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Link</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Link</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Link</Link>
              </Box>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
              <Link href="/">Logo</Link>
            </Grid>
            <Grid item xs={5}>
              <TextField id="outlined-basic" label="Enter Item ID" fullWidth />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="center" alignItems="center">
              <Box display="flex" gap="50px">
                <Link href="/auth">Sign In / Register</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Orders</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/cart">Cart</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
