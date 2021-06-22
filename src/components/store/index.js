import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import taskReducer from "./task-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

export default store;
