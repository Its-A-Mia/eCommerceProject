import { createSlice, current } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    checked: [0],
    priceFilter: [],
    ratingFilter: [],
    colorFilter: [],
  },
  reducers: {
    toggleFilter(state, action) {
      const currentIndex = state.checked.indexOf(action.payload.option); //returns -1 if not in array

      if (currentIndex === -1) {
        // toggle checked on
        state.checked.push(action.payload.option);
        // add filter
        if (action.payload.filterType === "price") {
          state.priceFilter.push(action.payload.option);
          return;
        }
        if (action.payload.filterType === "rating") {
          state.ratingFilter.push(action.payload.option);
          return;
        }
        if (action.payload.filterType === "color") {
          state.colorFilter.push(action.payload.option);
          return;
        }
      } else {
        // toggle checked off
        state.checked.splice(currentIndex, 1);
        // remove filter
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
      }
    },
    clearFilter(state, action) {
      state.checked = [0];
      state.priceFilter.length = 0;
      state.ratingFilter.length = 0;
      state.colorFilter.length = 0;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
