import { Add, Remove } from "@mui/icons-material";

import tShirtBG from "../../public/images/tshirts.png";
import hoodiesBG from "../../public/images/hoodies.png";
import jeansBG from "../../public/images/jeans.png";
import shoesBG from "../../public/images/shoes.png";
import sweatersBG from "../../public/images/sweaters.png";
import sweatpantsBG from "../../public/images/sweatpants.png";

import {
  Button,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function useCreateCartCards(products) {
  // set up redux dispatch
  const dispatch = useDispatch();

  // grab cart state
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // only populate cart if it is empty
    if (cartItems.length === 0) {
      // grab items from localStorage
      let itemsArr = [];
      for (let i = 0, len = localStorage.length; i < len; i++) {
        if (localStorage.key(i).match(/CART-ITEM\s/gm))
          itemsArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }

      // if no items to store in cart, then don't populate cart
      if (itemsArr.length !== 0) {
        dispatch(cartActions.setCartItems({ itemsArr }));
      }
    }
  });

  // if cart is empty, return
  if (!cartItems) {
    return;
  }

  function itemImage(category) {
    switch (category) {
      case "shirt":
        return tShirtBG.src;

      case "sweater":
        return sweatersBG.src;

      case "hoodie":
        return hoodiesBG.src;

      case "sweatpants":
        return sweatpantsBG.src;

      case "jeans":
        return jeansBG.src;

      case "shoe":
        return shoesBG.src;
    }
  }

  function subtotal() {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum +=
        products.find((product) => product.id === cartItems[i].productID).price *
        cartItems[i].quantity;
    }
    return sum;
  }

  // Send back cartItems in order to fulfill checkout API call, calculate subtotal, and create the cards
  let cartInfo = {
    cartItems: cartItems,
    subtotal: subtotal().toFixed(2),
    cards: cartItems.map((item) => (
      <li key={item.productID} style={{ listStyle: "none" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} height="100%">
            <Grid container spacing={2}>
              <Grid item xs={12} display="flex" gap="20px">
                <Box width="140px">
                  <CardMedia
                    component="img"
                    image={itemImage(
                      products.find((product) => product.id === item.productID).category
                    )}
                  />
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                  <Link href={`/products/${item.productID}`}>
                    {products.find((product) => product.id === item.productID).title}
                  </Link>
                  {/* <Typography>
                    Item {products.find((product) => product.id === item.productID).id}
                  </Typography> */}
                  <Typography>
                    $
                    {Number(
                      products.find((product) => product.id === item.productID).price
                    ).toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column" gap="8px">
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 2px",
                      display: "flex",
                      alignItems: "center",
                      width: 130,
                      borderRadius: "20px",
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        dispatch(cartActions.removeOneCartItem({ id: item.productID }))
                      }
                    >
                      <Remove />
                    </IconButton>
                    <InputBase
                      type="text"
                      value={item.quantity}
                      sx={{
                        "&.MuiInputBase-root": {
                          "& input": {
                            textAlign: "center",
                          },
                        },
                      }}
                    ></InputBase>
                    <IconButton
                      onClick={() => dispatch(cartActions.addOneToCartItem({ id: item.productID }))}
                    >
                      <Add />
                    </IconButton>
                  </Paper>
                  <Button
                    variant="text"
                    onClick={() => dispatch(cartActions.removeItemFromCart({ id: item.productID }))}
                  >
                    Remove
                  </Button>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                  <Typography>Total</Typography>
                  <Typography>
                    $
                    {(
                      Number(products.find((product) => product.id === item.productID).price) *
                      item.quantity
                    ).toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} display="flex" flexDirection="column" gap="10px">
            <Button
              variant="contained"
              sx={{
                "&.MuiButton-root": {
                  cursor: "default",
                },
              }}
              fontSize="small"
            >
              Express: Shipping & Handling included
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ marginBottom: "15px" }} />
          </Grid>
        </Grid>
      </li>
    )),
  };
  return cartInfo;
}
