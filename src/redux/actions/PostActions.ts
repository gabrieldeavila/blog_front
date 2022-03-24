import { GET_POSTS, PostsActionTypes } from "../types/PostsType";
import { Post } from "./../interfaces/Post";

export const getPostsAction = (posts: Post[]): PostsActionTypes => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};
