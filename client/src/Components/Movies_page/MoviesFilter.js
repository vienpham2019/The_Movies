import { useDispatch, useSelector } from "react-redux";
import { getMovieFilter } from "../../helper_method";

import {
  A_filter_movies,
  A_movie_page,
  A_set_fillter_genre_and_year,
} from "../../reducer/Actions/movies_action";

export default function MoviesFilter() {
  const {
    movies,
    filter_movies,
    fillter_movie_by_year,
    fillter_movie_by_genre,
  } = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  let { genres, years, ratings } = getMovieFilter(filter_movies);
  genres["All"] = movies.length;

  const filterByGenre = (genre) => {
    let f_movies;
    if (genre === "All") {
      f_movies = movies;
      dispatch(A_set_fillter_genre_and_year(genre, " "));
    } else {
      f_movies = filter_movies.filter((movie) =>
        movie.genre.match(new RegExp(genre, "i"))
      );
      dispatch(A_set_fillter_genre_and_year(genre, fillter_movie_by_year));
    }
    dispatch(A_filter_movies(f_movies));
    dispatch(A_movie_page(0));
  };

  const filterByYear = (year) => {
    let [y_start, y_end] = year.split("-");
    let f_movies = filter_movies.filter((movie) => {
      let y = Math.floor(movie.release_date.split("-")[0]);
      return Math.floor(y_start) <= y && Math.floor(y_end) >= y;
    });
    dispatch(A_filter_movies(f_movies));
    dispatch(A_set_fillter_genre_and_year(fillter_movie_by_genre, year));
    dispatch(A_movie_page(0));
  };

  const filterByRating = (rating) => {
    let f_movies = filter_movies.filter(
      (movie) => Math.floor(movie.vote_average) === Math.floor(rating)
    );
    dispatch(A_filter_movies(f_movies));
    dispatch(A_movie_page(0));
  };

  return (
    <div
      className="top-movies-list mb-4"
      style={{ minWidth: "350px", maxWidth: "400px" }}
    >
      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Genres</h2>
        </header>

        <div className="mt-2" style={{ columnCount: 2 }}>
          {Object.entries(genres).map(([_genre, count]) => (
            <div className="checkbox-wrapper">
              <input
                id={`checkbox-${_genre}`}
                type="checkbox"
                checked={_genre === fillter_movie_by_genre && count !== 0}
                disabled={count === 0}
                onClick={() => filterByGenre(_genre)}
              />
              <label
                for={`checkbox-${_genre}`}
                className="text-white checkbox-label m-0"
              ></label>
              <label
                className={`checkbox-category ${
                  count === 0 ? "text-muted line--through" : "text-white"
                }`}
              >
                {_genre} ({count})
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Movies by years</h2>
        </header>

        <div className="mt-2 d-flex flex-wrap">
          {Object.entries(years).map(([_year, count]) => (
            <div
              className={`px-2 py-3 bd-highlight col m-2 text-center text-info btn btn-dark ${
                _year === fillter_movie_by_year && "border-success"
              } ${count === 0 && "text-muted"}`}
              role="button"
              aria-disabled="true"
              style={{ borderRadius: "0" }}
              onClick={() => count !== 0 && filterByYear(_year)}
            >
              {_year} <small className="d-inline text-white">({count})</small>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Filter by Rating</h2>
        </header>

        <div className="my-2 d-flex flex-wrap">
          {Object.entries(ratings).map(([_rating, count]) => (
            <div
              className="p-1 text-info w-100 row m-0 justify-content-between left-underline border-white"
              role="button"
              onClick={() => filterByRating(_rating)}
            >
              <div>
                {Array.from(Array(10), (_, i) => {
                  return (
                    <i className={`${i < _rating ? "fas" : "far"} fa-star`}></i>
                  );
                })}
              </div>
              <p className="text-white text-right">( {count} )</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
