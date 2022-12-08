import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import usersReducer from "../slice/usersSlice";
import postsReducer from "../slice/postsSlice";

export default configureStore({
    reducer : {
        counter: counterReducer,
        users: usersReducer,
        posts: postsReducer,

       }
})