import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./app/features/counter/counterSlice";
import postsReducer from "./app/features/posts/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

export default store;
