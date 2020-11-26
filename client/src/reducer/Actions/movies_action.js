const A_filter_movies = (filter_movies) => ({
  type: "FILTER_MOVIES",
  values: { filter_movies },
});

const A_display_movies = (display_movies) => ({
  type: "DISPLAY_MOVIES",
  values: { display_movies },
});

export { A_filter_movies, A_display_movies };
