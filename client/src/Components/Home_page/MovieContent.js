function MovieContent(props) {
  let { title, year, genre, img } = props.movie;
  return (
    <div
      className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking hvr-shrink"
      role="button"
    >
      <span class="movie__badge">
        <span class="movie__badge--featured">Featured</span>
      </span>
      <div className="movie__poster">
        <a
          href="_"
          className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
        >
          <img src={img} className="movie__poster--image" />
        </a>
      </div>
      <div className="movie__body">
        <div className="movie__info">
          <div className="movie__info--head">
            <div className="movie__meta">
              <span className="movie__meta--release-year">{year}</span>
              <span className="movie__meta--genre">{genre}</span>
            </div>
            <a
              href="-"
              className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
            >
              <h3 className="masvideos-loop-movie__title movie__title">
                {title}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieContent;
