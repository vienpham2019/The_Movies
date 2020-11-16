import { createUseStyles } from "react-jss";
const styles = createUseStyles({
  backgroundImage: (props) => ({
    "&::after": {
      content: `""`,
      backgroundImage: `url(${props.img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: "0.3",
      filter: "blur(40px)",
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

  const rate = 7.9;
  return (
    <div className="gt-title-overview gt-style-1">
      <div className={`gt-cover ${styles(movie).backgroundImage}`}>
        <div className="gt-flex-container">
          <div className="gt-poster">
            <img src={movie.img} />
          </div>
          <div className="gt-details gt-part-1">
            <h6>{movie.year}</h6>
            <h1>{movie.title}</h1>
            <div className="gt-mini-summary">
              <p>{movie.description}</p>
            </div>
            <div class="gt-items">
              <div class="gt-circular-items">
                <div class="gt-item gt-watch-trailer">
                  <div class="gt-button gt-style-3 gt-dark">
                    <div role="button" class="d-flex align-items-center">
                      <div class="gt-icon">
                        <i class="fas fa-play"></i>
                      </div>
                      <span>Watch the Trailer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gt-dotted-items">
                <div class="gt-item gt-time">{movie.duration}</div>
                <div class="gt-item gt-genres">
                  <ul>
                    <li>{movie.genre}</li>
                  </ul>
                </div>
                <div class="gt-item gt-release-date">December 9, 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gt-flex-container text-dark">
        <div className="gt-details gt-part-2">
          <div className="gt-inner-wrapper">
            <div className="gt-inner-items">
              <div className="gt-user-ratings gt-style-1 pl-4 p-0 pr-3">
                <div className="gt-results">
                  <strong>5.8 / 4</strong>
                </div>
                <div className="gt-stars">
                  {Array.from(Array(10)).map((_, i) => (
                    <i
                      className={`${i + 1 <= rate ? "fas" : "far"} fa-star`}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="gt-imdb-rating gt-style-1">
                <div className="gt-point">
                  <div className="gt-point">7.9</div>
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
