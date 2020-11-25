let initState = {
  movies: [],
  home_header_movies: [],
};

export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        ...action.values,
      };
    default:
      return state;
  }
}
