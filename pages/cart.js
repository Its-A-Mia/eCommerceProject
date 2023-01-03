import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import utilStyles from "../styles/utils.module.css";

export default function Cart() {
  // have auth functionality connected to seeing your order and checking out. No checkout page, just a checkout button that checks session auth, if no auth, redirect to auth.

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h2" className={utilStyles.h2}>
            Cart
          </Typography>
          <Divider sx={{ width: "60%" }} />
        </Grid>
        <Grid item sm={12} md={8}>
          items
        </Grid>
        <Grid item sm={12} md={4} border={"solid gray 2px"} padding="16px">
          <Box width="100%">
            <Grid container spacing={2}>
              <Grid
                item
                display="flex"
                width="50%"
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
              >
                <Typography>Subtotal</Typography>
                <Typography>Discount</Typography>
                <Typography>Shipping & Handling</Typography>
              </Grid>
              <Grid
                item
                display="flex"
                width="50%"
                flexDirection="column"
                alignItems="flex-end"
                gap="8px"
              >
                <Typography>$100</Typography>
                <Typography>$100</Typography>
                <Typography>$100</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ margin: "14px" }} /> {/* come back to this */}
            <Grid container spacing={2}>
              <Grid
                item
                display="flex"
                width="50%"
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
              >
                <Typography>Estimated Total</Typography>
              </Grid>
              <Grid
                item
                display="flex"
                width="50%"
                flexDirection="column"
                alignItems="flex-end"
                gap="8px"
              >
                <Typography>$300</Typography>
              </Grid>
            </Grid>
            <Button variant="contained" sx={{ marginTop: "15px" }} fullWidth>
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
