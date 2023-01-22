import { createSlice } from "@reduxjs/toolkit";

const productViewSlice = createSlice({
  name: "productView",
  initialState: { view: "grid" },
  reducers: {
    setViewToGrid(state) {
      state.view = "grid";
    },
    setViewToList(state) {
      state.view = "list";
    },
  },
});

export const productViewActions = productViewSlice.actions;

export default productViewSlice;
