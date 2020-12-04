import movieInfoReducer from "./movieInfoReducer";
import moviesReducer from "./moviesReducer";
import topMoviesReducer from "./topMoviesReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
  movieInfoReducer,
  moviesReducer,
  topMoviesReducer,
  userReducer,
});
