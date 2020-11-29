import { useState } from "react";
import DisplayMovies from "./DisplayMovies";
import MoviesFilter from "./MoviesFilter";
import TopMovies from "./TopMovies";
import Pagination from ".././Pagination";
import "./Movies.css";
import { useSelector, useDispatch } from "react-redux";
import {
  A_filter_movies,
  A_set_fillter_genre_and_year,
} from "../../reducer/Actions/movies_action";

export default function MoviesPage(props) {
  const { filter_movies, movies } = useSelector((state) => state.moviesReducer);
  const displayMoviesAmount = 20;
  const dispatch = useDispatch();
  const [vodi_value, setVodiValue] = useState("grid");
  const [displaySideBar, setSideBar] = useState(false);

  let vodi = [
    { type: "grid", value: "fas fa-th" },
    { type: "grid-extended", value: "fas fa-th-large" },
    { type: "list-large", value: "fas fa-list-ul" },
    { type: "list", value: "fas fa-bars" },
  ];

  const handelSearchMovie = (title) => {
    const f_movies = movies.filter((movie) =>
      movie.title.match(new RegExp(title, "i"))
    );
    dispatch(A_filter_movies(f_movies));
    dispatch(A_set_fillter_genre_and_year("All", " "));
  };

  const pages = Math.ceil(filter_movies.length / displayMoviesAmount);

  return (
    <div
      className="home-section section-movies-list w-100 m-0"
      style={{ paddingTop: "90px" }}
    >
      <div className="mx-auto widget-area" style={{ width: "93%" }}>
        <div className="section-movies-list__inner">
          {/*  */}
          <div className={`sidebar ${displaySideBar ? "active" : ""}`}>
            <div
              className="dismiss"
              role="button"
              onClick={() => setSideBar(!displaySideBar)}
            >
              <i className="fas fa-times"></i>
            </div>
            <MoviesFilter />
            <TopMovies history={props.history} />
          </div>

          <div className="featured-with-list-view-movies-list pl-4 w-100">
            <header className="featured-with-list-view-movies-list__header">
              <div className="row w-100 m-0">
                <h2 className="section-movies-list__title">Movies</h2>
                <input
                  type="text"
                  className="mx-auto w-50 text-white rounded-pill border-white movies-search"
                  style={{ maxHeight: "30px" }}
                  placeholder="Search..."
                  onChange={(e) => handelSearchMovie(e.target.value)}
                />
              </div>
            </header>
            {/*  */}
            <ul className="d-flex justify-content-end">
              {vodi.map((value) => (
                <li
                  className={`mx-1 vodi-button ${
                    vodi_value === value.type ? "nav-item bg-info" : "nav-item"
                  }`}
                  role="button"
                  onClick={() => setVodiValue(value.type)}
                >
                  <span className="mx-2">
                    <i className={value.value + " text-white"}></i>
                  </span>
                </li>
              ))}
              <li
                className="ml-4 px-3 sidebar--toggler border text-center"
                role="button"
                onClick={() => setSideBar(!displaySideBar)}
              >
                <span className="text-white">
                  <i className="fas fa-sliders-h mr-1"></i>
                  <span>Filters</span>
                </span>
              </li>
            </ul>

            <div className="w-100">
              <div
                className="custom-scrollbar"
                style={{
                  height: "120em",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                <DisplayMovies
                  vodi_value={vodi_value}
                  history={props.history}
                />
              </div>
              <hr />
              {pages > 1 && <Pagination pages={pages} />}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
