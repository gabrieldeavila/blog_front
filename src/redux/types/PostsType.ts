import { Post } from "./../interfaces/Post";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POSTS";

export interface PostsStateType {
  posts: Post[];
}

interface GetPostActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}

interface AddPostActionType {
  type: typeof ADD_POST;
  payload: Post;
}

export type PostsActionTypes = GetPostActionType | AddPostActionType;
