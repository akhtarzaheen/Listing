import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import productReducer from "./products-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export default store;
