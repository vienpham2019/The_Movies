function TopMovies(props) {
  const { movies } = props;
  return (
    <div class="top-movies-list" style={{ maxWidth: "350px" }}>
      <header class="top-movies-list__header">
        <h2 class="section-movies-list__title">Top 5 List</h2>
      </header>
      <div class="top-movies-list__info">
        <div class="masvideos masvideos-movies">
          <div class="movies columns-1">
            <div class="movies__inner">
              {movies.map((value) => (
                <div
                  class="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action hvr-shrink"
                  role="button"
                >
                  <div class="movie-list">
                    <div class="movie-list__body">
                      <span class="movie-list__year">{value.year}</span>
                      <h3 class="movie-list__name">{value.title}</h3>
                      <span class="movie-list__genre">{value.genre}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMovies;
