import { useSelector } from "react-redux";
export default function RecommendMovies() {
  const { movie } = useSelector((state) => state.movieInfoReducer);
  return (
    <section className="movie__related my-5 bg-light py-5">
      <div className="movie__related--inner">
        <div
          className="masvideos masvideos-movies mx-auto"
          style={{ width: "80%" }}
        >
          <h4 className="mb-4 border-bottom pb-2">
            {" "}
            <span className="py-3 bg-light">You Also May Like</span>
          </h4>

          <div className="movies columns-8">
            <div className="movies__inner">
              {Array.from(Array(8)).map((_) => (
                <div className="movie" role="button">
                  <div className="movie__poster">
                    <div className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                      <img
                        style={{ width: "300px", height: "450px" }}
                        src={movie.poster_path}
                        className="movie__poster--image"
                      />
                    </div>
                  </div>
                  <div className="movie__body">
                    <div className="movie__info">
                      <div className="movie__info--head">
                        <div className="movie__meta">
                          <span className="movie__meta--release-year">
                            {movie.release_date.split("-")[0]}
                          </span>

                          <span className="movie__meta--genre">
                            {movie.Genre}
                          </span>
                        </div>

                        <h3 className="masvideos-loop-movie__title  movie__title">
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
