import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    // can only call this client side otherwise localStorage will not be defined
    setCartItems(state, action) {
      state.cartItems = action.payload.itemsArr;
    },
    addToCart(state, action) {
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      // store item if null
      if (!cartItemLS) {
        localStorage.setItem(
          `CART-ITEM ${action.payload.id}`,
          JSON.stringify({ productID: action.payload.id, amtOf: 1 })
        );
        return;
      }

      // otherwise add one more to localStorage
      if (cartItemLS.amtOf >= 1) {
        localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
        cartItemLS.amtOf += 1;
        localStorage.setItem(
          `CART-ITEM ${action.payload.id}`,
          JSON.stringify({ productID: action.payload.id, amtOf: cartItemLS.amtOf })
        );
      }
    },
    setCartItemAmount(state, action) {
      state.cartItems = [];
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
      cartItemLS.amtOf = action.payload.itemAmt;
      localStorage.setItem(
        `CART-ITEM ${action.payload.id}`,
        JSON.stringify({ productID: action.payload, amtOf: cartItemLS.amtOf })
      );
    },
    addOneToCartItem(state, action) {
      state.cartItems = [];
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
      cartItemLS.amtOf += 1;
      localStorage.setItem(
        `CART-ITEM ${action.payload.id}`,
        JSON.stringify({ productID: action.payload.id, amtOf: cartItemLS.amtOf })
      );
    },
    removeOneCartItem(state, action) {
      state.cartItems = [];
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      // don't allow it to delete item
      if (cartItemLS.amtOf <= 1) {
        return;
      }

      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
      cartItemLS.amtOf -= 1;

      localStorage.setItem(
        `CART-ITEM ${action.payload.id}`,
        JSON.stringify({ productID: action.payload.id, amtOf: cartItemLS.amtOf })
      );
    },
    removeItemFromCart(state, action) {
      state.cartItems = [];
      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
