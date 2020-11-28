let initState = {
  movies: [],
  home_header_movies: [],
  filter_movies: [],
  movie_page: 0,
  display_movies_amount: 20,
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

    case "MOVIE_PAGE":
      return {
        ...state,
        ...action.values,
      };

    case "DISPLAY_MOVIES_AMOUNT":
      return {
        ...state,
        ...action.values,
      };
    default:
      return state;
  }
}
