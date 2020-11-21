function MovieContent(props) {
  let { title, year, genre, img } = props.movie;
  return (
    <div class="movie">
      <div class="movie__poster">
        <a
          href="-"
          class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
        >
          <img
            src={img}
            style={{ width: "300px", height: "450px" }}
            class="movie__poster--image"
          />
        </a>
      </div>
      <div class="movie__body">
        <div class="movie__info">
          <div class="movie__info--head">
            <div class="movie__meta">
              <span class="movie__meta--release-year">{year}</span>
              <span class="movie__meta--genre">{genre}</span>
            </div>

            <h3 class="masvideos-loop-movie__title  movie__title">{title}</h3>
          </div>{" "}
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default MovieContent;
