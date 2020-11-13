import TopMovies from "./TopMovies";
function MoviesFilter(props) {
  const { top_9_of_week } = props;
  return (
    <div
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
    </div>
  );
}

export default MoviesFilter;
