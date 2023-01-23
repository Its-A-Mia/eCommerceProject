import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import utilStyles from "../styles/utils.module.css";
import useCreateCartCards from "../components/customHooks/useCreateCartCards";
import axios from "axios";
import { useEffect, useState } from "react";

export const getStaticProps = async (ctx) => {
  const res = await axios.get("http://localhost:3000/api/product");
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};

export default function Cart({ products }) {
  // have auth functionality connected to seeing your order and checking out. No checkout page, just a checkout button that checks session auth, if no auth, redirect to auth.

  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartInfo = useCreateCartCards(products);

  const cartCards = cartInfo.cards;
  const subtotal = cartInfo.subtotal;

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/protected/checkout", {
        cartItems: cartInfo.cartItems,
      });
      localStorage.clear();
      setOrderPlaced(true);
    } catch (error) {
      document.cookie = `authRedirectPath=cart;secure;samesite=lax`;
      if (error.response.data === "unauthorized") {
        return (window.location = "/auth");
      }
      console.log(error);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h2" className={utilStyles.h2}>
            Cart
          </Typography>
          <Divider />
        </Grid>
        <Grid item sm={12} md={8}>
          {orderPlaced ? (
            <Box display="flex" flexDirection="column" gap="20px" maxWidth="660px">
              <Typography>
                Your order has been placed! Click See Orders below to go to your orders.
              </Typography>
              {/* place in media query here */}
              <Button variant="contained" href="/protected/orders" fullWidth>
                See Orders
              </Button>
            </Box>
          ) : cartInfo.cards.length === 0 ? (
            <Box display="flex" flexDirection="column" gap="20px" maxWidth="660px">
              <Typography>
                Your shopping cart is empty. Please add at least one item to your cart before
                checking out.
              </Typography>
              {/* place in media query here */}
              <Button variant="contained" href="/" fullWidth>
                Continue Shopping
              </Button>
            </Box>
          ) : (
            cartCards
          )}
        </Grid>
        {cartInfo.cards.length === 0 ? (
          <Grid item sm={12} md={4}></Grid>
        ) : !orderPlaced ? (
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
                  <Typography>${subtotal}</Typography>
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
                  <Typography>${cartInfo.subtotal}</Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                onClick={() => handleCheckout()}
                sx={{ marginTop: "15px" }}
                fullWidth
              >
                Checkout
              </Button>
            </Box>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
