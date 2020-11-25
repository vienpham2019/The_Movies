import { useState } from "react";
import DisplayMovies from "./DisplayMovies";
import MoviesFilter from "./MoviesFilter";
import TopMovies from "./TopMovies";
import Pagination from ".././Pagination";
import "./Movies.css";
import { connect } from "react-redux";

function MoviesPage(props) {
  let { movies } = props;
  const displayMoviesAmount = 20;
  const [vodi_value, setVodiValue] = useState("grid");
  const [displaySideBar, setSideBar] = useState(false);
  const [displayMovies, setDisplayMovies] = useState(
    movies.slice(0, displayMoviesAmount)
  );
  let vodi = [
    { type: "grid", value: "fas fa-th" },
    { type: "grid-extended", value: "fas fa-th-large" },
    { type: "list-large", value: "fas fa-list-ul" },
    { type: "list", value: "fas fa-bars" },
  ];

  let top_9_of_week = [
    { title: "Delta Brovo", year: "2017", genre: "Action" },
    { title: "Mad", year: "2016", genre: "Drama" },
    { title: "Oh Lucky", year: "2018", genre: "Action, Comedy" },
    { title: "Euphoria", year: "2018", genre: "Action, Adventure" },
    { title: "Black Mirror", year: "2018", genre: "Action, Adventure" },
    {
      title: "The Conveninet Groom",
      year: "2016",
      genre: "Action, Adventure, Romance",
    },
    { title: "Paradigm Lost", year: "2017", genre: "Action, Documentary" },
    { title: "Pacific Rim: Uprising", year: "2019", genre: "Action, Sci-Fi" },
    { title: "Dirt", year: "2019", genre: "Action, Sport" },
  ];

  const pages = Math.ceil(movies.length / displayMoviesAmount);

  const handleDisplayPage = (page) =>
    setDisplayMovies(
      movies.slice((page - 1) * displayMoviesAmount, page * displayMoviesAmount)
    );

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
            <MoviesFilter movies={movies} />
            <TopMovies movies={top_9_of_week} />
          </div>

          <div className="featured-with-list-view-movies-list pl-4">
            <header className="featured-with-list-view-movies-list__header">
              <div className="row w-100 m-0">
                <h2 className="section-movies-list__title">Movies</h2>
                <input
                  type="text"
                  className="mx-auto w-50 text-white rounded-pill border-white movies-search"
                  style={{ maxHeight: "30px" }}
                  placeholder="Search..."
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
                  maxHeight: "120em",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                <DisplayMovies
                  movies={displayMovies}
                  vodi_value={vodi_value}
                  history={props.history}
                />
              </div>
              <hr />
              {pages > 1 && (
                <Pagination pages={pages} handleDisplay={handleDisplayPage} />
              )}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  let { movies } = state.moviesReducer;
  return { movies };
};
export default connect(mapStateToProps)(MoviesPage);
