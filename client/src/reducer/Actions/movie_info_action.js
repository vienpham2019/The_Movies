const A_set_movie_info = (movie, movie_reviews = []) => ({
  type: "SET_MOVIE_INFO",
  values: { movie, movie_reviews },
});

const A_add_movie_reviews = (movie, movie_reviews) => ({
  type: "ADD_MOVIE_REVIEWS",
  values: { movie, movie_reviews },
});

export { A_set_movie_info, A_add_movie_reviews };
