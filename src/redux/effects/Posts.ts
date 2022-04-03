import axios from "axios";
import { Dispatch } from "redux";
import { PostsActionTypes } from "../types/PostsType";
import { addPostAction, getPostsAction } from "./../actions/PostActions";
import { Post } from "./../interfaces/Post";

export const getPosts = () => {
  return function (dispatch: Dispatch<PostsActionTypes>) {
    const POSTS_URL = "http://127.0.0.1:5000/all-posts";

    axios
      .get(POSTS_URL)
      .then((res) => {
        dispatch(getPostsAction(res.data));
      })
      .catch((err) => {});
  };
};

export const addPost = (post: Post) => {
  return function (dispatch: Dispatch<PostsActionTypes>) {
    const POSTS_URL = "http://127.0.0.1:5000/post/";

    axios
      .post(POSTS_URL, { title: post.title, text: post.text })
      .then((res) => {
        console.log(res.data);
        dispatch(addPostAction({ title: res.data.title, text: res.data.text }));
      });
  };
};
