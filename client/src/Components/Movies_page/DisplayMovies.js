function DisplayMovies(props) {
  let { movies, vodi_value } = props;
  return (
    <div class="vodi-archive-wrapper" data-view={vodi_value}>
      <div
        class={`movies ${
          vodi_value === "grid-extended" ? "columns-4" : "columns-5"
        }`}
      >
        <div class="movies__inner">
          {movies.map((movie) => (
            <div class="movie p-2" role="button">
              <div class="movie__poster">
                <img
                  src={movie.img}
                  class="movie__poster--image"
                  style={{ width: "300px" }}
                />
              </div>
              <div class="movie__body px-2 ">
                <div class="movie__info">
                  <div class="movie__info--head">
                    <div class="movie__meta">
                      <span class="movie__meta--release-year">
                        {movie.year}
                      </span>
                      <span class="movie__meta--genre text-info">
                        {movie.genre}
                      </span>
                    </div>
                    <span class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                      <div class="row">
                        <div class="col-12 text-truncate text-white">
                          <strong style={{ fontSize: "1em" }}>
                            {movie.title}
                          </strong>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div
                    class="mb-2"
                    style={{
                      display:
                        vodi_value === "list-large" || vodi_value === "list"
                          ? "block"
                          : "none",
                    }}
                  >
                    <div class="text-justify ">
                      <p class="text__ px-2">{movie.description}</p>
                    </div>
                  </div>
                  <div class="movie__actions mt-5">
                    <span
                      class="btn_ btn-block_ btn-outline-dark_ text-white mx-2 border"
                      role="button"
                      style={{ width: "200px" }}
                    >
                      Watch Now
                    </span>
                    <div class="movie-actions--link_add-to-playlist dropdown border">
                      <span
                        class="btn_ btn-block_ btn-outline-dark_ w-55 text-white mx-2"
                        role="button"
                      >
                        + Playlist
                      </span>
                    </div>
                  </div>
                </div>
                <span class="text-info">
                  {" "}
                  9.0 <i class="fas fa-star"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DisplayMovies;
