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
      if (action.filterType === "price") {
        state.priceFilter.push = action.option;
        return;
      }
      if (action.filterType === "rating") {
        state.ratingFilter.push = action.option;
        return;
      }
      if (action.filterType === "color") {
        state.colorFilter.push = action.option;
        return;
      }
    },
    removeFilter(state, action) {
      if (action.filterType === "price") {
        const currentIndex = state.priceFilter.indexOf(action.option);
        state.priceFilter.splice(currentIndex, 1);
        return;
      }
      if (action.filterType === "rating") {
        const currentIndex = state.ratingFilter.indexOf(action.option);
        state.ratingFilter.splice(currentIndex, 1);
        return;
      }
      if (action.filterType === "color") {
        const currentIndex = state.colorFilter.indexOf(action.option);
        state.colorFilter.splice(currentIndex, 1);
        return;
      }
    },
  },
});
