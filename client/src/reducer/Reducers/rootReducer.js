import movieInfoReducer from "../Reducers/movieInfoReducer";
import moviesReducer from "../Reducers/moviesReducer";
import topMoviesReducer from "../Reducers/topMoviesReducer";
import { combineReducers } from "redux";

export default combineReducers({
  movieInfoReducer,
  moviesReducer,
  topMoviesReducer,
});
