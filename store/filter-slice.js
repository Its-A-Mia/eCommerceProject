import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    priceFilter: [],
    ratingFilter: [],
    colorFilter: [],
  },
  reducers: {
    addFilter(state, action) {
      if (action.payload.filterType === "price") {
        state.priceFilter.push(action.payload.option);
        return;
      }
      if (action.payload.filterType === "rating") {
        state.ratingFilter.push(Number(action.payload.option));
        return;
      }
      if (action.payload.filterType === "color") {
        state.colorFilter.push(action.payload.option);
        return;
      }
    },
    removeFilter(state, action) {
      console.log("remove");

      if (action.payload.filterType === "price") {
        const currentIndex = state.priceFilter.indexOf(action.payload.option);
        state.priceFilter.splice(currentIndex, 1);
        return;
      }
      if (action.payload.filterType === "rating") {
        const currentIndex = state.ratingFilter.indexOf(action.payload.option);
        state.ratingFilter.splice(currentIndex, 1);
        return;
      }
      if (action.payload.filterType === "color") {
        const currentIndex = state.colorFilter.indexOf(action.payload.option);
        state.colorFilter.splice(currentIndex, 1);
        return;
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
