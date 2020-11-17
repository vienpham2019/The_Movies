function TopMovies(props) {
  const { movies } = props;
  return (
    <div className="top-movies-list" style={{ maxWidth: "350px" }}>
      <header className="top-movies-list__header">
        <h2 className="section-movies-list__title">Top 5 List</h2>
      </header>
      <div className="top-movies-list__info">
        <div className="masvideos masvideos-movies">
          <div className="movies columns-1">
            <div className="movies__inner">
              {movies.map((value) => (
                <div
                  className="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action hvr-shrink"
                  role="button"
                >
                  <div className="movie-list">
                    <div className="movie-list__body">
                      <span className="movie-list__year">{value.year}</span>
                      <h3 className="movie-list__name">{value.title}</h3>
                      <span className="movie-list__genre">{value.genre}</span>
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
