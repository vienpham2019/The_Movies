export default function RecommendMovies(props) {
  const { movie } = props;
  return (
    <section class="movie__related my-5 bg--light--gray py-3">
      <div class="movie__related--inner">
        <div
          class="masvideos masvideos-movies mx-auto"
          style={{ width: "80%" }}
        >
          <strong class="text-dark" style={{ fontSize: "1.4em" }}>
            You Also May Like
          </strong>
          <hr />

          <div class="movies columns-8">
            <div class="movies__inner">
              {Array.from(Array(8)).map((_) => (
                <div class="movie" role="button">
                  <div class="movie__poster">
                    <div class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                      <img
                        style={{ width: "300px", height: "450px" }}
                        src={movie.poster_path}
                        class="movie__poster--image"
                      />
                    </div>
                  </div>
                  <div class="movie__body">
                    <div class="movie__info">
                      <div class="movie__info--head">
                        <div class="movie__meta">
                          <span class="movie__meta--release-year">
                            {movie.release_date.split("-")[0]}
                          </span>

                          <span class="movie__meta--genre">{movie.Genre}</span>
                        </div>

                        <h3 class="masvideos-loop-movie__title  movie__title">
                          {movie.title}
                        </h3>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
