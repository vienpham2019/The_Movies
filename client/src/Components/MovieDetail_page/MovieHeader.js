import { createUseStyles } from "react-jss";
import { getDate, getFirstNGenre } from "../../helper_method";
const styles = createUseStyles({
  backgroundImage: (props) => ({
    "&::after": {
      content: `""`,
      backgroundImage: `url(${props})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      opacity: "0.3",
      filter: "blur(20px)",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      zIndex: "-1",
      position: "absolute",
    },
  }),
});
function MovieHeader(props) {
  const { movie } = props;
  const [month, day, year] = getDate(movie.release_date);

  return (
    <div className="gt-title-overview gt-style-1">
      <div
        className={`gt-cover ${styles(movie.backdrop_path).backgroundImage}`}
      >
        <div className="gt-flex-container">
          <div className="gt-poster">
            <img src={movie.poster_path} />
          </div>
          <div className="gt-details gt-part-1">
            <h6>{year}</h6>
            <span style={{ fontSize: "3em", lineHeight: "normal" }}>
              <strong>{movie.title}</strong>
            </span>
            <div className="gt-mini-summary">
              <p>{movie.Plot}</p>
            </div>
            <div className="gt-items">
              <div className="gt-circular-items">
                <div className="gt-item gt-watch-trailer">
                  <div className="gt-button gt-style-3 gt-dark">
                    <div role="button" className="d-flex align-items-center">
                      <div className="gt-icon">
                        <i className="fas fa-play"></i>
                      </div>
                      <span>Watch the Trailer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gt-dotted-items">
                <div className="gt-item gt-time">{movie.Runtime}</div>
                <div className="gt-item gt-genres">
                  <ul>
                    <li>{getFirstNGenre(movie.Genre, 3)}</li>
                  </ul>
                </div>
                <div className="gt-item gt-release-date">{`${month} ${day}, ${year}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gt-flex-container text-dark">
        <div className="gt-details gt-part-2">
          <div className="gt-inner-wrapper">
            <div className="gt-inner-items mx-auto">
              <div className="gt-user-ratings gt-style-1  p-0 pr-3">
                <div className="gt-results">
                  <span style={{ fontSize: "1.2em" }}>
                    <strong className="mr-2">
                      Reviews({movie.movieReviews.length})
                    </strong>
                    {movie.reivewScore}/10
                  </span>
                </div>
                <div className="gt-stars">
                  {Array.from(Array(10)).map((_, i) => (
                    <i
                      className={`${
                        i + 1 <= movie.reivewScore ? "fas" : "far"
                      } fa-star`}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="gt-imdb-rating gt-style-1">
                <div className="gt-point">
                  <div className="gt-point">
                    {movie.vote_average.toFixed(1)}
                  </div>
                </div>
                <span>IMDb</span>
              </div>
              <div className="gt-network gt-style-1">
                <div className="gt-item-title">Network</div>
                <div className="gt-item-content">
                  <strong>A&amp;E</strong>
                </div>
              </div>
              <div className="gt-status gt-style-1">
                <div className="gt-item-title">Status</div>
                <div className="gt-item-content">
                  <strong>Post Production</strong>
                </div>
              </div>
            </div>
            <div className="gt-buttons">
              <div
                className="gt-button gt-style-2 rounded-0 mx-2 btn btn-dark"
                role="button"
              >
                <span className="btn">
                  <i className="fas fa-plus text-white"></i>
                </span>
              </div>
              <div
                className="gt-button gt-style-2 border mx-2 btn rounded-0"
                role="button"
              >
                <div className="btn">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeader;
