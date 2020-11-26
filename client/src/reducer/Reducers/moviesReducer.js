let initState = {
  movies: [],
  home_header_movies: [],
  display_movies: [],
};

export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        ...action.values,
        display_movies: action.values.movies,
      };
    default:
      return state;
  }
}
