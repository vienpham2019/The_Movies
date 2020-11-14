function MoviesFilter(props) {
  const categories = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantacy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thiller",
    "Thriller",
  ];
  const years = [
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
  ];
  return (
    <div class="top-movies-list mb-4" style={{ maxWidth: "350px" }}>
      <div class="px-3 pb-2">
        <header class="top-movies-list__header m-0">
          <h2 class="section-movies-list__title">Categories</h2>
        </header>

        <div class="mt-2" style={{ columnCount: 2 }}>
          {categories.map((category, index) => (
            <div class="checkbox-wrapper">
              <input id={`checkbox-${index}`} type="checkbox" />
              <label
                for={`checkbox-${index}`}
                class="text-white checkbox-label m-0 "
              ></label>
              <label class="checkbox-category text-white">{category}</label>
            </div>
          ))}
        </div>
      </div>

      <div class="px-3 pb-2">
        <header class="top-movies-list__header m-0">
          <h2 class="section-movies-list__title">Movies by years</h2>
        </header>

        <div class="mt-2 d-flex flex-wrap">
          {years.map((year) => (
            <div
              class="p-2 bd-highlight col m-2 text-center text-info btn btn-dark"
              role="button"
              style={{ borderRadius: "0" }}
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesFilter;

{
  /* <div
      id="secondary"
      class="widget-area sidebar-area movie-sidebar"
      role="complementary"
    >
      <div class="widget-area-inner">
        <div class="widget widget_vodi_movies_filter">
          <div
            id="masvideos_movies_filter_widget-2"
            class="widget masvideos widget_layered_nav masvideos-movies-filter-widget"
          >
            <div class="widget-header">
              <span class="widget-title">Categories</span>
            </div>
            <ul class="masvideos-widget-movies-layered-nav-list">
              <li class="masvideos-widget-movies-layered-nav-list__item masvideos-layered-nav-term">
                Action
              </li>
            </ul>
          </div>

          <div
            id="masvideos_movies_year_filter-2"
            class="widget masvideos masvideos-widget_movies_year_filter"
          >
            <div class="widget-header">
              <span class="widget-title">Movies by Year</span>
            </div>
            <ul>
              <li class="masvideos-layered-nav-movies-year">2020</li>
            </ul>
          </div>
          <div
            id="masvideos_movies_rating_filter-2"
            class="widget masvideos movies_widget_rating_filter"
          >
            <div class="widget-header">
              <span class="widget-title">Filter by Rating</span>
            </div>
            <ul>
              <li class="masvideos-layered-nav-rating">
                <div class="star-rating">
                  <div class="star-rating">
                    <span class="screen-reader-text">10.0 rating</span>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                    <div class="star star-full" aria-hidden="true"></div>
                  </div>
                </div>
                (2)
              </li>
            </ul>
          </div>
        </div>
        <TopMovies movies={top_9_of_week} />
      </div>
    </div> */
}
