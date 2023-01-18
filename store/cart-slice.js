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
          JSON.stringify({ productID: action.payload.id, quantity: action.payload.quantity })
        );
        return;
      }

      // otherwise add one more to localStorage
      if (cartItemLS.quantity >= 1) {
        localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
        cartItemLS.quantity += action.payload.quantity;
        localStorage.setItem(
          `CART-ITEM ${action.payload.id}`,
          JSON.stringify({ productID: action.payload.id, quantity: cartItemLS.quantity })
        );
      }
    },
    setCartItemAmount(state, action) {
      state.cartItems = [];
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
      cartItemLS.quantity = action.payload.itemAmt;
      localStorage.setItem(
        `CART-ITEM ${action.payload.id}`,
        JSON.stringify({ productID: action.payload, quantity: cartItemLS.quantity })
      );
    },
    addOneToCartItem(state, action) {
      state.cartItems = [];
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
      cartItemLS.quantity += 1;
      localStorage.setItem(
        `CART-ITEM ${action.payload.id}`,
        JSON.stringify({ productID: action.payload.id, quantity: cartItemLS.quantity })
      );
    },
    removeOneCartItem(state, action) {
      state.cartItems = [];
      const cartItemLS = JSON.parse(localStorage.getItem(`CART-ITEM ${action.payload.id}`));

      // don't allow it to delete item
      if (cartItemLS.quantity <= 1) {
        return;
      }

      localStorage.removeItem(`CART-ITEM ${action.payload.id}`);
      cartItemLS.quantity -= 1;

      localStorage.setItem(
        `CART-ITEM ${action.payload.id}`,
        JSON.stringify({ productID: action.payload.id, quantity: cartItemLS.quantity })
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
