export const GET_POSTS = "GET_POSTS";
import { Post } from "./../interfaces/Post";

export interface PostsStateType {
  posts: Post[];
}

interface GetPostActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}

export type PostsActionTypes = GetPostActionType;
