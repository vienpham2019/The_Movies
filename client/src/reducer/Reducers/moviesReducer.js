let initState = {
  movies: [],
  home_header_movies: [],
  filter_movies: [],
  display_movies: [],
};

export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        ...action.values,
        filter_movies: action.values.movies,
        display_movies: action.values.movies,
      };

    case "FILTER_MOVIES":
      return {
        ...state,
        ...action.values,
      };

    case "DISPLAY_MOVIES":
      return {
        ...state,
        ...action.values,
      };
    default:
      return state;
  }
}
