function MovieHeader(props) {
  const { movie } = props;
  return (
    <div class="gt-title-overview gt-style-1">
      <div class="gt-cover">
        <div class="gt-flex-container">
          <div class="gt-poster">
            <img src={movie.img} />
          </div>
          <div class="gt-details gt-part-1">
            <h6>{movie.year}</h6>
            <h1>{movie.title}</h1>
            <div class="gt-mini-summary">
              <p>{movie.description}</p>
            </div>
            <div class="gt-items">
              <div class="gt-dotted-items" role="button">
                <div class="border p-3 text-center">
                  <span class="mr-2">Watch the Trailer</span>
                  <i class="fas fa-play fa-1x"></i>
                </div>
              </div>
              <div class="gt-dotted-items">
                <div class="gt-item gt-time">{movie.duration}</div>
                <div class="gt-item gt-genres">
                  <ul>
                    <li>{movie.genre}</li>
                  </ul>
                </div>
                <div class="gt-item gt-release-date">March 29, 2019</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gt-flex-container">
        <div class="gt-details gt-part-2">
          <div class="gt-inner-wrapper">
            <div class="gt-inner-items">
              <div class="gt-user-ratings gt-style-1">
                <div class="gt-stars">
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="gt-results">
                  <h6 class="text-dark">5.8 / 4</h6>
                </div>
              </div>
              <div class="gt-imdb-rating gt-style-1">
                <div class="gt-point">
                  <div class="gt-point">7.9</div>
                </div>
                <span>IMDb</span>
              </div>
              <div class="gt-network gt-style-1">
                <div class="gt-item-title">Network</div>
                <div class="gt-item-content">
                  <strong>A&amp;E</strong>
                </div>
              </div>
              <div class="gt-status gt-style-1">
                <div class="gt-item-title">Status</div>
                <div class="gt-item-content">
                  <strong>Post Production</strong>
                </div>
              </div>
            </div>
            <div class="gt-buttons">
              <div class="gt-button gt-style-2 border mx-2 text-center">
                <button class="btn">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="gt-button gt-style-2 border mx-2 text-center">
                <button class="btn">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeader;
