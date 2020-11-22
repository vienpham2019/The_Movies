import movieInfoReducer from "../Reducers/movieInfoReducer";
import moviesReducer from "../Reducers/moviesReducer";
import { combineReducers } from "redux";

export default combineReducers({ movieInfoReducer, moviesReducer });
