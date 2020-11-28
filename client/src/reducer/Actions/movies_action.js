const A_filter_movies = (filter_movies) => ({
  type: "FILTER_MOVIES",
  values: { filter_movies },
});

const A_movie_page = (movie_page) => ({
  type: "MOVIE_PAGE",
  values: { movie_page },
});

const A_display_movies_amount = (display_movies_amount) => ({
  type: "DISPLAY_MOVIES_AMOUNT",
  values: { display_movies_amount },
});

export { A_filter_movies, A_movie_page, A_display_movies_amount };
