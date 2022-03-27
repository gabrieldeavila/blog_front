import { combineReducers } from "redux";
import { setCurrPageReducer } from "./PageReducer";
import { getPostsReducer } from "./PostsReducer";

const rootReducer = combineReducers({
  page: setCurrPageReducer,
  posts: getPostsReducer,
});

export default rootReducer;
