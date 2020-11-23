function MovieContent(props) {
  let { title, year, genre, img } = props.movie;
  return (
    <div className="movie">
      <div className="movie__poster">
        <a
          href="-"
          className="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
        >
          <img
            src={img}
            style={{ width: "300px", height: "450px" }}
            className="movie__poster--image"
          />
        </a>
      </div>
      <div className="movie__body">
        <div className="movie__info">
          <div className="movie__info--head">
            <div className="movie__meta">
              <span className="movie__meta--release-year">{year}</span>
              <span className="movie__meta--genre">{genre}</span>
            </div>

            <h3 className="masvideos-loop-movie__title  movie__title">
              {title}
            </h3>
          </div>{" "}
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default MovieContent;
