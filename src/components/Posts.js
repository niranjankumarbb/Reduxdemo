import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/slice/postsSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
  
    useEffect(() => {
      dispatch(getPosts());
    }, []);
    
    return (
      <div className="App">
        <h1>posts details :</h1>
        {posts && posts.map((post, i) => <p key={i}>{post.title}</p>)}
      </div>
    );
  }

export default Posts