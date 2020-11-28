import React, { useState } from "react";
function Top9OfWeek(props) {
  const { top_9_of_week, newest_movies } = props;
  let [newest_movie_info, setNewestMovieInfo] = useState(newest_movies[0]);

  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <div className="section-movies-list__inner">
        <div className="top-movies-list">
          <header className="top-movies-list__header">
            <h2 className="section-movies-list__title">Top 9 this Week</h2>
            <span className="text-info">Movie</span>
          </header>
          <div className="top-movies-list__info">
            <div className="masvideos masvideos-movies">
              <div className="movies columns-1">
                <div className="movies__inner">
                  {top_9_of_week.map((value) => (
                    <div className="movie" role="button">
                      <div className="movie-list">
                        <div className="movie-list__body">
                          <span className="movie-list__year">{value.year}</span>
                          <h3 className="movie-list__name">{value.title}</h3>
                          <span className="movie-list__genre">
                            {value.genre}
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
            <ul className="nav nav-tabs border-0 text-info">
              <li className="nav-item mx-3" role="button">
                Today
              </li>
              <li className="nav-item mx-3" role="button">
                This Week
              </li>
              <li className="nav-item mx-3" role="button">
                Last 30 days
              </li>
            </ul>
          </header>
          <div className="featured-with-list-view-movies-list__info">
            <div className="featured-movie">
              <div className="masvideos masvideos-movies">
                <div className="movies columns-1">
                  <div className="movies__inner">
                    <div className="movie">
                      <div
                        className="movie__poster"
                        style={{ minWidth: "190px" }}
                      >
                        <img
                          src={newest_movie_info.img}
                          className="movie__poster--image"
                        />
                      </div>
                      <div className="movie__body pl-3">
                        <div className="movie__info">
                          <div className="movie__info--head">
                            <div className="movie__meta">
                              <span className="movie__meta--release-year">
                                {newest_movie_info.year}
                              </span>
                            </div>

                            <h3 className="masvideos-loop-movie__title movie__title mb-0">
                              {newest_movie_info.title}
                            </h3>
                            <div className="text-info mt-2 mb-3">
                              <small>
                                {newest_movie_info.duration} |{" "}
                                {newest_movie_info.genre}
                              </small>
                            </div>
                          </div>
                          <div className="movie__short-description">
                            <div>{newest_movie_info.description}</div>
                          </div>
                          <div className="movie__actions">
                            <a href="-" className="movie-actions--link_watch">
                              Watch Now
                            </a>
                            <div className="movie-actions--link_add-to-playlist dropdown">
                              <a
                                className="dropdown-toggle"
                                href="-"
                                data-toggle="dropdown"
                              >
                                + Playlist
                              </a>
                              <div className="dropdown-menu">
                                <a className="login-link" href="-">
                                  Sign in to add this movie to a playlist.
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-view-movies-list">
              <div className="masvideos masvideos-movies">
                <div className="movies columns-1">
                  <div className="movies__inner">
                    {newest_movies.map((movie) => (
                      <div
                        className="movie"
                        onClick={() => setNewestMovieInfo(movie)}
                      >
                        <div className="movie-list hvr-shrink">
                          <div
                            className="movie-list__poster"
                            style={{ minWidth: "90px" }}
                          >
                            <img
                              src={movie.img}
                              className="movie__poster--image"
                            />
                          </div>
                          <div className="movie-list__body">
                            <span className="movie-list__year">
                              {movie.year}
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

export default Top9OfWeek;
