function TopMovies(props) {
  const { movies } = props;
  return (
    <div
      id="masvideos_movies_widget-2"
      class="widget masvideos masvideos_movies_widget masvideos-movies-widget"
    >
      <div class="widget-header">
        <span class="widget-title">Top 5 List</span>
      </div>
      <div class="masvideos masvideos-movies">
        <div class="movies columns-1">
          <div class="movies__inner">
            {movies.map((movie) => (
              <div class="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                <div class="movie__body">
                  <span class="movie__meta--release-year">{movie.year}</span>

                  <h3 class="masvideos-loop-movie__title movie__title">
                    {movie.title}
                  </h3>
                  <span class="movie__meta--genre">{movie.genre}</span>
                </div>
              </div>
            ))}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMovies;
