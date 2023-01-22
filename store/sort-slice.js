import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sortType: "Best Match",
  },
  reducers: {
    changeSortType(state, action) {
      state.sortType = action.payload.newSortType;
    },
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice;
