import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./app/features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
