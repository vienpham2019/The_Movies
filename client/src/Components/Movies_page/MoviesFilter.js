import { useState } from "react";
import { getMovieFilter } from "../../helper_method";

function MoviesFilter(props) {
  const { movies } = props;
  const [displayMovies, setDisplayMovies] = useState(movies.slice());
  const [category, setCategory] = useState("All");
  let { categories, years, ratings } = getMovieFilter(displayMovies);

  return (
    <div
      className="top-movies-list mb-4"
      style={{ minWidth: "350px", maxWidth: "400px" }}
    >
      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Categories</h2>
        </header>

        <div className="mt-2" style={{ columnCount: 2 }}>
          {Object.entries(categories).map(([key, value]) => (
            <div className="checkbox-wrapper">
              <input
                id={`checkbox-${key}`}
                type="checkbox"
                checked={key === category && value !== 0}
                disabled={value === 0}
                onClick={() => setCategory(key)}
              />
              <label
                for={`checkbox-${key}`}
                className="text-white checkbox-label m-0"
              ></label>
              <label
                className={`checkbox-category ${
                  value === 0 ? "text-muted line--through" : "text-white"
                }`}
              >
                {key} ({value})
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
          {Object.entries(years).map(([year, count]) => (
            <div
              className="px-2  py-3 bd-highlight col m-2 text-center text-info btn btn-dark"
              role="button"
              style={{ borderRadius: "0" }}
            >
              {year} <small className="d-inline text-white">({count})</small>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Filter by Rating</h2>
        </header>

        <div className="my-2 d-flex flex-wrap">
          {Object.entries(ratings).map(([key, value]) => (
            <div
              className="my-1 text-info w-100 row m-0 justify-content-between left-underline border-white"
              role="button"
            >
              <div>
                {Array.from(Array(10), (_, i) => {
                  return (
                    <i className={`${i < key ? "fas" : "far"} fa-star`}></i>
                  );
                })}
              </div>
              <p className="text-white text-right">( {value} )</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesFilter;
