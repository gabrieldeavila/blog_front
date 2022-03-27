import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getPosts } from "./../../redux/effects/Posts";
import { Post } from "./../../redux/interfaces/Post";

export default function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state: AppState) => state.posts);

  return (
    <div>
      <h1>Posts</h1>
      {posts.posts.map((post: Post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}
