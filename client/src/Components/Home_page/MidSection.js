import { useDispatch, useSelector } from "react-redux";
import {
  A_set_movie_info,
  A_set_display_videos,
} from "../../reducer/Actions/movie_info_action";
import { randomNumber, getMovieAndReviews } from "../../helper_method";

export default function MidSection(props) {
  const dispatch = useDispatch();
  const { newest_movies } = useSelector((state) => state.topMoviesReducer);
  const ran_num = randomNumber(0, newest_movies.length - 3);
  return (
    <div className="bg-dark movie-slider mb-1 mt-5">
      <div className="masvideos masvideos-movies ">
        <div className="movies columns-3">
          <div className="movies__inner">
            {/*  */}
            {newest_movies.slice(ran_num, ran_num + 3).map((movie) => (
              <div
                className="movie has-bg py-5"
                key={"home page mid section newest movie " + movie.title}
                style={{
                  backgroundImage: `url(${movie.poster_path})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="slider-movie mx-1"
                  style={{ background: "rgba(255, 255, 255, 0.2)" }}
                >
                  <div className="slider-movie__hover">
                    <div className="slider-movie__hover_watch-now">
                      <span
                        className="watch-now-btn"
                        role="button"
                        data-toggle="modal"
                        data-target="#movieTrailerModal"
                        onClick={() =>
                          dispatch(A_set_display_videos(movie.videos))
                        }
                      >
                        <div className="watch-now-btn-bg">
                          <svg width="49px" height="54px">
                            <path
                              fill="rgb(255, 255, 255)"
                              d="M2.000,51.000 C-0.150,46.056 0.424,8.178 2.000,5.000 C3.282,2.414 5.732,0.351 9.000,1.000 C19.348,3.054 45.393,19.419 48.000,25.000 C49.019,27.182 48.794,28.758 48.000,31.000 C46.967,33.919 13.512,54.257 9.000,54.000 C6.740,53.873 3.005,53.311 2.000,51.000 Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="watch-now-txt">Watch Now</div>
                      </span>
                    </div>
                    <span className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                      <h3 className="masvideos-loop-movie__title  movie__title">
                        {movie.title}
                      </h3>
                    </span>
                    <div className="slider-movie__meta">
                      <ul className="movie-details">
                        <li className="movie-duration">{movie.runtime}</li>
                        <li className="movie-genre">{movie.genre}</li>
                      </ul>
                    </div>
                    <div className="slider-movie-description-wrap">
                      <div className="movie__short-description">
                        <div>
                          <p>{movie.plot}</p>
                        </div>
                      </div>
                    </div>
                    <div className="movie__actions">
                      <span
                        className="btn btn-dark text-white border border-dark rounded-0 w-50 py-2"
                        role="button"
                        onClick={async () => {
                          let data = await getMovieAndReviews(movie);
                          dispatch(A_set_movie_info(data));
                          window.scrollTo(0, 0);
                          props.history.push("/movie_info");
                        }}
                      >
                        MORE INFO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
