import { useSelector, useDispatch } from "react-redux";
import { A_set_movie_info } from "../../reducer/Actions/movie_info_action";
import { getMovieAndReviews } from "../../helper_method";

export default function HomeHeader(props) {
  const dispatch = useDispatch();
  const { newest_movies } = useSelector((state) => state.topMoviesReducer);
  const display_movies = newest_movies
    .filter((movie) => movie.genre.match(new RegExp("Sci-fi", "i")))
    .slice(0, 7);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide position-relative swiper-wrapper"
      >
        <ol className="carousel-indicators swiper--pagination">
          {display_movies.map((_, index) => (
            <li
              data-target="#carouselExampleControls"
              data-slide-to={index}
              key={`home page home header display movie ${index}`}
              className="active bg-info"
              style={{ height: "10px", width: "50px" }}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {display_movies.map((movie, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              data-interval="15000"
              key={`home page home header movie content ${index}`}
            >
              <div className="swiper-slide swiper-slide-active">
                <div className="swiper-slide-caption main-section text-center text-md-left">
                  <div className="container">
                    <div className="row row-40 flex-column-reverse flex-md-row justify-content justify-content-lg-between">
                      <div className="col-md-6 col-lg-5 col-xl-6">
                        <ul
                          className="list-movie-info animate__animated animate__fadeInDown"
                          style={{ animationDelay: "2s" }}
                        >
                          <li>{movie.release_date.split("-")[0]}</li>
                          <li>imdb: {movie.vote_average}\10</li>
                          <li>{movie.runtime}</li>
                        </ul>
                        <small
                          className="ml-1 text-info animate__animated animate__fadeInDown"
                          style={{ animationDelay: "2.2s" }}
                        >
                          {movie.genre}
                        </small>
                        <h1
                          className="animate__animated animate__fadeInUp ml-4 movie_header_title"
                          style={{ animationDelay: "2.4s" }}
                        >
                          {movie.title}
                        </h1>
                        <p
                          className="animate__animated animate__fadeInUp"
                          style={{ animationDelay: "2.6s" }}
                        >
                          {movie.overview}
                        </p>

                        <div
                          className="text-lg-left mt-5 text-center animate__animated animate__fadeInLeft "
                          style={{ animationDelay: "2.9s" }}
                        >
                          <span
                            className="button-custom fadeInUp animated"
                            role="button"
                            onClick={async () => {
                              let _data = await getMovieAndReviews(movie);
                              window.scrollTo(0, 0);
                              dispatch(A_set_movie_info(_data));
                              props.history.push("/movie_info");
                            }}
                          >
                            <i className="fas fa-info mr-2 my-auto"></i>MORE
                            INFO
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-7 col-xl-5 onset-1 animate__animated animate__fadeInRight animate__delay-1s">
                        <div className="slider-image onset-left-2">
                          <img
                            src={movie.poster_path}
                            style={{ width: "422px" }}
                          />
                          <div className="slider-image-title">
                            <span>{movie.genre.split(",")[0]}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/*  */}
        </div>
      </div>
      <div
        className="swiper--button swiper--button-next carousel-control-next my-auto mr-4"
        role="button"
        href="#carouselExampleControls"
        data-slide="next"
      ></div>
      <div
        className="swiper--button swiper--button-prev carousel-control-prev my-auto ml-4"
        role="button"
        href="#carouselExampleControls"
        data-slide="prev"
      ></div>
      <div className="decorative-word">Movies</div>
    </div>
  );
}
