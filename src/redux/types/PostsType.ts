import { Post } from "./../interfaces/Post";

export const GET_POSTS = "GET_POSTS";

export interface PostsStateType {
  posts: Post[];
}

interface GetPostActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}

export type PostsActionTypes = GetPostActionType;
