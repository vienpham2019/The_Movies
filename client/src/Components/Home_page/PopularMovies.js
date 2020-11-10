import MovieContent from "./MovieContent";

function PopularMovies() {
  const movie = {
    title: "Bpm",
    year: "2018",
    genre: "Action , Drama",
    img:
      "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg",
  };

  const getMovies = () => {
    let movies = [];
    for (let i = 0; i < 10; i++) {
      movies.push(movie);
    }
    return movies;
  };

  return (
    <div>
      <div className="container">
        <div class="home-movie-section-aside-header__inner">
          <div className="masvideos masvideos-movies">
            <div className="movies columns-7">
              <div className="movies__inner">
                <header className="home-section__header">
                  <h2 className="home-section__title">
                    Popular Movies <br />
                    to Watch Now
                  </h2>
                  <p className="home-section__subtitle">
                    Most watched movies by days
                  </p>
                  <div className="home-section__action">
                    <a href="_" className="home-section__action-link">
                      View all
                    </a>
                  </div>
                </header>

                {/* Movie contain  */}
                {getMovies().map((value, index) => {
                  return <MovieContent movie={value} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View more button */}

      <div className="home-section__footer-view-more-action ">
        <span className="home-section__footer-view-more-action__inner">
          <a href="_" className="home-section__footer-view-more-action--link">
            + View more
          </a>
        </span>
      </div>
    </div>
  );
}

export default PopularMovies;
