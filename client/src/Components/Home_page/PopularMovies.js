import MovieContent from "./MovieContent";
import { useSelector, useDispatch } from "react-redux";

export default function PopularMovies(props) {
  const { popular_movies } = useSelector((state) => state.topMoviesReducer);

  return (
    <div>
      <div className="mx-auto" style={{ width: "85%" }}>
        <div className="home-movie-section-aside-header__inner">
          <div className="masvideos masvideos-movies">
            <div className="movies columns-7">
              <div className="movies__inner">
                <header className="home-section_header">
                  <h1 className="home-section__title">
                    Popular Movies <br />
                    to Watch Now
                  </h1>
                  <p className="home-section__subtitle m-0">
                    Most watched movies by days
                    <hr />
                  </p>
                  <div className="home-section__action">
                    <span
                      className="home-section__action-link left-underline"
                      role="button"
                    >
                      View all
                    </span>
                  </div>
                </header>

                {/* Movie contain  */}
                {popular_movies.slice(0, 15).map((movie, index) => {
                  return (
                    <MovieContent
                      movie={movie}
                      key={index}
                      history={props.history}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View more button */}

      <div className="home-section__footer-view-more-action ">
        <span className="home-section__footer-view-more-action__inner">
          <a href="-" className="home-section__footer-view-more-action--link">
            + View more
          </a>
        </span>
      </div>
    </div>
  );
}
