import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { A_set_movie_info } from "../../reducer/Actions/movie_info_action";
export default function Top9OfWeek(props) {
  const dispatch = useDispatch();
  const genres = ["Action", "Horror", "Animation", "Drama"];
  const { newest_movies } = useSelector((state) => state.topMoviesReducer);
  const [display_movies, setDisplayMovies] = useState(
    newest_movies
      .filter((movie) => movie.genre.match(new RegExp("Action", "i")))
      .slice(0, 10)
  );
  const [newest_movie_info, setNewestMovieInfo] = useState(display_movies[0]);

  const [filter_genre, setFilterGenre] = useState("Action");
  const top_10 = newest_movies
    .slice()
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  const handleFilterMovies = (genre) => {
    setFilterGenre(genre);
    setDisplayMovies(
      newest_movies
        .filter((movie) => movie.genre.match(new RegExp(genre, "i")))
        .slice(0, 10)
    );
  };
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <div className="section-movies-list__inner">
        <div className="top-movies-list">
          <header className="top-movies-list__header">
            <h2 className="section-movies-list__title">Top 10 this Week</h2>
            <span className="text-info">Movie</span>
          </header>
          <div className="top-movies-list__info">
            <div className="masvideos masvideos-movies">
              <div className="movies columns-1">
                <div className="movies__inner">
                  {top_10.map((movie, index) => (
                    <div
                      className="movie"
                      role="button"
                      key={index}
                      onClick={() => setNewestMovieInfo(movie)}
                    >
                      <div className="movie-list">
                        <div className="movie-list__body">
                          <span className="movie-list__year">
                            {movie.release_date.split("-")[0]}
                          </span>
                          <h2 className="movie-list__name">{movie.title}</h2>
                          <span className="movie-list__genre">
                            {movie.genre}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-with-list-view-movies-list">
          <header className="featured-with-list-view-movies-list__header">
            <h2 className="section-movies-list__title">Newest Movies</h2>
            <ul className="nav nav-tabs border-0">
              {genres.map((genre, index) => (
                <li
                  className={`nav-item mx-3 ${
                    filter_genre === genre ? "text-info" : "text-muted"
                  }`}
                  role="button"
                  key={index}
                  onClick={() => handleFilterMovies(genre)}
                >
                  {genre}
                </li>
              ))}
            </ul>
          </header>
          <div className="featured-with-list-view-movies-list__info">
            <div className="featured-movie">
              <div className="masvideos masvideos-movies">
                <div className="movies columns-1">
                  <div className="movies__inner">
                    {newest_movie_info && (
                      <div className="movie">
                        <div
                          className="movie__poster"
                          style={{ minWidth: "190px" }}
                        >
                          <img
                            src={newest_movie_info.poster_path}
                            className="movie__poster--image"
                          />
                        </div>
                        <div className="movie__body pl-3">
                          <div className="movie__info">
                            <div className="movie__info--head">
                              <div className="movie__meta">
                                <span className="movie__meta--release-year">
                                  {newest_movie_info.release_date.split("-")[0]}
                                </span>
                              </div>

                              <h3 className="masvideos-loop-movie__title movie__title mb-0">
                                {newest_movie_info.title}
                              </h3>
                              <div className="text-info mt-2 mb-3">
                                <small>
                                  {newest_movie_info.runtime} |{" "}
                                  {newest_movie_info.genre}
                                </small>
                              </div>
                            </div>
                            <div className="movie__short-description">
                              <div>{newest_movie_info.plot}</div>
                            </div>
                            <div className="movie__actions">
                              <span
                                className="movie-actions--link_watch"
                                role="button"
                                onClick={() => {
                                  window.scrollTo(0, 0);
                                  dispatch(A_set_movie_info(newest_movie_info));
                                  props.history.push("/movie_info");
                                }}
                              >
                                More Info
                              </span>
                              <div className="movie-actions--link_add-to-playlist">
                                <span className="movie-actions--link_watch">
                                  + Playlist
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="list-view-movies-list">
              <div className="masvideos masvideos-movies">
                <div className="movies columns-1">
                  <div className="movies__inner">
                    {display_movies.map((movie, index) => (
                      <div
                        className="movie"
                        onClick={() => setNewestMovieInfo(movie)}
                        key={index}
                      >
                        <div className="movie-list hvr-shrink">
                          <div
                            className="movie-list__poster"
                            style={{ minWidth: "90px" }}
                          >
                            <img
                              src={movie.poster_path}
                              className="movie__poster--image"
                            />
                          </div>
                          <div className="movie-list__body">
                            <span className="movie-list__year">
                              {movie.release_date.split("-")[0]}
                            </span>
                            <h3 className="movie-list__name">{movie.title}</h3>
                            <span className="movie-list__genre">
                              {movie.genre}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
