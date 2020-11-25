let initState = {
  movie: null,
};

export default function movieInfoReducer(state = initState, action) {
  switch (action.type) {
    case "SET_MOVIE_INFO":
      return { ...state, ...action.values };
    default:
      return state;
  }
}