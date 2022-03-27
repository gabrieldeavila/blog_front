import axios from "axios";
import { Dispatch } from "redux";
import { PostsActionTypes } from "../types/PostsType";
import { getPostsAction } from "./../actions/PostActions";

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
