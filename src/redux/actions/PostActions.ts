import { ADD_POST, GET_POSTS, PostsActionTypes } from "../types/PostsType";
import { Post } from "./../interfaces/Post";

export const getPostsAction = (posts: Post[]): PostsActionTypes => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

export const addPostAction = (post: Post): PostsActionTypes => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
