import React, { useState } from "react";
function Top9OfWeek(props) {
  const { top_9_of_week, newest_movies } = props;
  let [newest_movie_info, setNewestMovieInfo] = useState(newest_movies[0]);

  return (
    <div class="mx-auto" style={{ width: "80%" }}>
      <div class="section-movies-list__inner">
        <div class="top-movies-list">
          <header class="top-movies-list__header">
            <h2 class="section-movies-list__title">Top 9 this Week</h2>
            <span class="text-info">Movie</span>
          </header>
          <div class="top-movies-list__info">
            <div class="masvideos masvideos-movies">
              <div class="movies columns-1">
                <div class="movies__inner">
                  {top_9_of_week.map((value) => (
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

        <div class="featured-with-list-view-movies-list">
          <header class="featured-with-list-view-movies-list__header">
            <h2 class="section-movies-list__title">Newest Movies</h2>
            <ul class="nav nav-tabs border-0 text-info">
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
          <div class="featured-with-list-view-movies-list__info">
            <div class="featured-movie">
              <div class="masvideos masvideos-movies">
                <div class="movies columns-1">
                  <div class="movies__inner">
                    <div class="movie">
                      <div class="movie__poster" style={{ minWidth: "190px" }}>
                        <img
                          src={newest_movie_info.img}
                          class="movie__poster--image"
                        />
                      </div>
                      <div class="movie__body pl-3">
                        <div class="movie__info">
                          <div class="movie__info--head">
                            <div class="movie__meta">
                              <span class="movie__meta--release-year">
                                {newest_movie_info.year}
                              </span>
                            </div>

                            <h3 class="masvideos-loop-movie__title movie__title mb-0">
                              {newest_movie_info.title}
                            </h3>
                            <div className="text-info mt-2 mb-3">
                              <small>
                                {newest_movie_info.duration} |{" "}
                                {newest_movie_info.genre}
                              </small>
                            </div>
                          </div>
                          <div class="movie__short-description">
                            <div>{newest_movie_info.description}</div>
                          </div>
                          <div class="movie__actions">
                            <a href="-" class="movie-actions--link_watch">
                              Watch Now
                            </a>
                            <div class="movie-actions--link_add-to-playlist dropdown">
                              <a
                                class="dropdown-toggle"
                                href="-"
                                data-toggle="dropdown"
                              >
                                + Playlist
                              </a>
                              <div class="dropdown-menu">
                                <a class="login-link" href="-">
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
            <div class="list-view-movies-list">
              <div class="masvideos masvideos-movies">
                <div class="movies columns-1">
                  <div class="movies__inner">
                    {newest_movies.map((movie) => (
                      <div
                        class="movie"
                        onClick={() => setNewestMovieInfo(movie)}
                      >
                        <div class="movie-list hvr-shrink">
                          <div
                            class="movie-list__poster"
                            style={{ minWidth: "90px" }}
                          >
                            <img src={movie.img} class="movie__poster--image" />
                          </div>
                          <div class="movie-list__body">
                            <span class="movie-list__year">{movie.year}</span>
                            <h3 class="movie-list__name">{movie.title}</h3>
                            <span class="movie-list__genre">{movie.genre}</span>
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
