import { getDate, getFirstNGenre } from "../../helper_method";
import { connect } from "react-redux";
function DisplayMovies(props) {
  let { movies, vodi_value } = props;
  return (
    <div className="vodi-archive-wrapper" data-view={vodi_value}>
      <div
        className={`movies ${
          vodi_value === "grid-extended" ? "columns-4" : "columns-5"
        }`}
      >
        <div className="movies__inner">
          {movies.map((movie) => (
            <div
              className="movie p-2"
              role="button"
              onClick={() => {
                window.scrollTo(0, 0);
                props.setMovieInfo(movie);
                props.history.push("/movie_info");
              }}
            >
              <div className="movie__poster">
                <img
                  src={movie.poster_path}
                  className="movie__poster--image"
                  style={{ width: "300px" }}
                />
              </div>
              <div className="movie__body px-2 ">
                <div className="movie__info">
                  <div className="movie__info--head">
                    <div className="movie__meta">
                      <span className="movie__meta--release-year">
                        {getDate(movie.release_date)[2]}
                      </span>
                      <span className="movie__meta--genre text-info">
                        {getFirstNGenre(movie.genre, 3)}
                      </span>
                    </div>
                    <span className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                      <div className="row">
                        <div className="col-12 text-truncate text-white">
                          <strong style={{ fontSize: "1em" }}>
                            {movie.title}
                          </strong>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div
                    className="mb-2"
                    style={{
                      display:
                        vodi_value === "list-large" || vodi_value === "list"
                          ? "block"
                          : "none",
                    }}
                  >
                    <div className="text-justify ">
                      <p className="text__ px-2">{movie.plot}</p>
                    </div>
                  </div>
                  <div className="movie__actions mt-5">
                    <span
                      className="btn_ btn-block_ btn-outline-dark_ text-white mx-2 border"
                      role="button"
                      style={{ width: "200px" }}
                    >
                      Watch Now
                    </span>
                    <div className="movie-actions--link_add-to-playlist dropdown border">
                      <span
                        className="btn_ btn-block_ btn-outline-dark_ w-55 text-white mx-2"
                        role="button"
                      >
                        + Playlist
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-info">
                  {" "}
                  {movie.vote_average} <i className="fas fa-star"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setMovieInfo: (movie) =>
    dispatch({ type: "SET_MOVIE_INFO", values: { movie } }),
});
export default connect(null, mapDispatchToProps)(DisplayMovies);
