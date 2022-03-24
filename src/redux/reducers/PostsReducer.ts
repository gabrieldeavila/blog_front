import { PostsActionTypes, PostsStateType } from "../types/PostsType";
import { GET_POSTS } from "./../types/PostsType";

const initialStatePosts: PostsStateType = {
  posts: [],
};

export const getPostsReducer = (
  state = initialStatePosts,
  action: PostsActionTypes
): PostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};
