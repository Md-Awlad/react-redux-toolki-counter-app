import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./app/features/counter/counterSlice";
import postsReducer from "./app/features/posts/postSlice";
import userReducer from "./app/features/users/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: userReducer,
  },
});

export default store;
