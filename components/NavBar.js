import { Grid, Box, Divider, TextField, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";

export default function () {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  return (
    <>
      <Box bgcolor="#EEEEEE">
        <Container>
          <Grid container spacing={3} p="20px">
            <Grid item xs={12} sx={hiddenOnMobile} justifyContent="flex-end">
              <Box display="flex" gap="30px">
                <Link href="/work-in-progress">While Supplies Last</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">What's New</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Same-Day</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Online-Only</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Email Offers</Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress">Customer Service</Link>
              </Box>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
              <Link href="/">Logo</Link>
            </Grid>
            <Grid item xs={5}>
              <TextField id="outlined-basic" label="Enter Item ID" fullWidth />
            </Grid>
            <Grid
              item
              xs={5}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={hiddenOnMobile}
            >
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
