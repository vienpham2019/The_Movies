import MovieContent from "./MovieContent";
import { useSelector, useDispatch } from "react-redux";
import {
  A_filter_movies,
  A_set_sort_movies_by,
  A_movie_page,
} from "../../reducer/Actions/movies_action";

export default function PopularMovies(props) {
  const dispatch = useDispatch();
  const { popular_movies } = useSelector((state) => state.topMoviesReducer);

  return (
    <div>
      <div className="mx-auto" style={{ width: "85%" }}>
        <div className="home-movie-section-aside-header__inner">
          <div className="masvideos masvideos-movies">
            <div className="movies columns-7">
              <div className="movies__inner justify-content-center">
                <header className="home-section_header">
                  <h1 className="home-section__title">
                    Popular Movies <br />
                    to Watch Now
                  </h1>
                  <p className="home-section__subtitle m-0">
                    Most watched movies by days
                  </p>
                  <hr />
                  <div className="home-section__action">
                    <span
                      className="home-section__action-link left-underline"
                      role="button"
                      onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(A_filter_movies(popular_movies));
                        dispatch(A_set_sort_movies_by("Popularity"));
                        dispatch(A_movie_page(0));

                        props.history.push("/movies");
                      }}
                    >
                      View all
                    </span>
                  </div>
                </header>

                {/* Movie contain  */}
                {popular_movies.slice(0, 15).map((movie) => {
                  return (
                    <MovieContent
                      movie={movie}
                      key={"home page popular movie " + movie.title}
                      history={props.history}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
