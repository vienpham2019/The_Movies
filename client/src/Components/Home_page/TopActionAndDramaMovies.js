import MovieContent from "./MovieContent";

function TopActionAndDramaMovies() {
  const movie = {
    title: "Bpm",
    year: "2018",
    genre: "Action , Drama",
    img:
      "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg",
  };

  const getMovies = () => {
    let movies = [];
    for (let i = 0; i < 14; i++) {
      movies.push(movie);
    }
    return movies;
  };

  return (
    <div class="container">
      <div class="section-movies-carousel-aside-header__inner">
        <header class="home-section__header section-movies-carousel-aside-header__header">
          <h2 class="home-section__title">
            Action <br /> &amp;Drama Movies
          </h2>
          <div class="section-movies-carousel-aside-header__custom-arrows">
            <button
              class="slick-prev slick-arrow slick-disabled"
              aria-label="Previous"
              type="button"
              aria-disabled="true"
              style={{ display: "block" }}
            >
              Previous
            </button>
            <button
              class="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              aria-disabled="false"
              style={{ display: "block" }}
            >
              Next
            </button>
          </div>
          <div class="home-section__action">
            <a href="#" class="home-section__action-link">
              View All
            </a>
          </div>
        </header>
        <div class="section-movies-carousel__carousel">
          <div
            class="movies-carousel__inner"
            data-ride="vodi-slick-carousel"
            data-wrap=".movies__inner"
            data-slick='{"slidesToShow":6,"slidesToScroll":1,"dots":false,"arrows":true,"autoplay":false,"infinite":false,"responsive":[{"breakpoint":768,"settings":{"slidesToShow":2,"slidesToScroll":1}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":1}}],"appendArrows":"#section-movies-carousel-aside-header-5faa40a5431c3 .section-movies-carousel-aside-header__custom-arrows"}'
          >
            <div class="masvideos masvideos-movies ">
              <div class="movies columns-6">
                <div class="movies__inner slick-initialized slick-slider">
                  <div class="slick-list draggable">
                    <div
                      class="slick-track"
                      style={{
                        opacity: 1,
                        width: "1424px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      {/* Movie contain  */}
                      {getMovies().map((value, index) => {
                        return (
                          <div
                            class="slick-slide slick-active"
                            data-slick-index={index}
                            aria-hidden="false"
                            style={{ width: "164px" }}
                          >
                            <MovieContent movie={value} key={index} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopActionAndDramaMovies;
