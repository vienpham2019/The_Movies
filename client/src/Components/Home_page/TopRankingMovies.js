function TopRankingMovies() {
  const movie = {
    title: "Bpm",
    genre: "Action , Drama",
  };
  let genres = ["Action", "Biology", "Sci-Fi", "Crime", "Drama", "Kids"];

  const getMovies = () => {
    let movies = [];
    for (let i = 0; i < 10; i++) {
      let img =
        i % 2 === 0
          ? "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg"
          : "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg";
      let year = "201" + i;
      movies.push({ ...movie, img, year });
    }
    return movies;
  };

  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <div className="home-section__inner">
        <header className="home-section__flex-header">
          <h2 className="section-title">Top Ranking Movies</h2>
          <ul className="nav">
            {genres.map((genre, index) => (
              <li className="nav-item mx-3">
                <span
                  className="text-info left-underline"
                  onClick={() => {
                    getMovies(index + 5);
                  }}
                  role="button"
                >
                  {genre}
                </span>
              </li>
            ))}
          </ul>
        </header>
        <div className="section-movies-carousel__carousel">
          <div className="movies-carousel__inner">
            <div className="masvideos masvideos-movies">
              <div className="movies colums-7">
                <div className="movies__inner slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div className="slick-track d-flex justify-content-center flex-wrap">
                      {getMovies().map((value) => (
                        <div
                          className="slick-slide hvr-shrink animate__animated animate__zoomIn p-2 bd-highlight"
                          style={{ width: "265px" }}
                          role="button"
                        >
                          <div
                            className="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action"
                            style={{
                              width: "100%",
                              display: "inline-block",
                            }}
                          >
                            <div className="movie__poster">
                              <a
                                href="-"
                                className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
                              >
                                <img
                                  src={value.img}
                                  className="movie__poster--image"
                                />
                              </a>
                            </div>
                            <div className="movie__body">
                              <div className="movie__info">
                                <div className="movie__info--head">
                                  <div className="movie__meta">
                                    <span className="movie__meta--release-year">
                                      {value.year}
                                    </span>
                                    <span className="movie__meta--genre text-info">
                                      {value.genre}
                                    </span>
                                  </div>
                                  <h3 className="masvideos-loop-movie__title movie__title text-white">
                                    {value.title}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div class="d-flex flex-row-reverse bd-highlight border-top">
        <p class="home-section__action-link p-2 bd-highlight" role="button">
          View All
        </p>
      </div>
    </div>
  );
}

export default TopRankingMovies;
