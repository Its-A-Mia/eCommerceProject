import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import utilStyles from "../styles/utils.module.css";
import useCreateCartCards from "../components/customHooks/useCreateCartCards";
import { useEffect } from "react";
import { createExpressionWithTypeArguments } from "typescript";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function Cart({ products }) {
  // have auth functionality connected to seeing your order and checking out. No checkout page, just a checkout button that checks session auth, if no auth, redirect to auth.

  const cartCards = useCreateCartCards(products);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} fullWidth>
          <Typography variant="h2" className={utilStyles.h2}>
            Cart
          </Typography>
          <Divider />
        </Grid>
        <Grid item sm={12} md={8}>
          {cartCards.cards.length === 0 ? (
            <Box display="flex" flexDirection="column" gap="20px">
              <Typography>
                Your shopping cart is empty. Please add at least one item to your cart before
                checking out.
              </Typography>
              {/* place in media query here */}
              <Button variant="contained" href="/" sx={{ width: "50%" }}>
                Continue Shopping
              </Button>
              <Divider sx={{ width: "91%", paddingTop: "10px" }} />
            </Box>
          ) : (
            cartCards.cards
          )}
        </Grid>
        {cartCards.cards.length === 0 ? (
          <Grid item sm={12} md={4}></Grid>
        ) : (
          <Grid item sm={12} md={4}>
            <Box width="100%" border={"solid gray 2px"} padding="16px">
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
                  <Typography>${cartCards.subtotal}</Typography>
                  <Typography>FREE</Typography>
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
                  <Typography>${cartCards.subtotal}</Typography>
                </Grid>
              </Grid>
              <Button variant="contained" sx={{ marginTop: "15px" }} fullWidth>
                Checkout
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
