import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

 export const getPosts = createAsyncThunk('posts/getPosts', (dispatch, getState) => {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) =>{ 
          console.log('posts response', res.data)
           return res.data
          } )
          .catch(err=> console.log(err))

    return res;
  });

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: null,
  }, 
reducers: {},
extraReducers: {
  [getPosts.pending]: (state) => {
    state.loading = true;
  
  },
  [getPosts.fulfilled]: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  [getPosts.rejected]: (state) => {
    state.loading = false;
  },
},
});

export default postsSlice.reducer;

