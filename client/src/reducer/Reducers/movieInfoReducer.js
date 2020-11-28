let initState = {
  movie: null,
  movie_reviews: [],
};

export default function movieInfoReducer(state = initState, action) {
  switch (action.type) {
    case "SET_MOVIE_INFO":
      return { ...state, ...action.values };

    case "ADD_MOVIE_REVIEWS":
      return { ...state, ...action.values };

    default:
      return state;
  }
}
