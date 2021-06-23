import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = action.payload;
    },
    updateProduct(state, action) {
      state.products = action.payload;
    },
    removeProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const productSliceActions = productSlice.actions;

export default productSlice.reducer;
