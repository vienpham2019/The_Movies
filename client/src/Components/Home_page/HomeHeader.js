function HomeHeader(props) {
  let { movies } = props;
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide position-relative swiper-wrapper"
      >
        <ol class="carousel-indicators swiper--pagination">
          {movies.map((_, index) => (
            <li
              data-target="#carouselExampleControls"
              data-slide-to={index}
              class="active bg-info"
              style={{ height: "10px", width: "50px" }}
            ></li>
          ))}
        </ol>

        <div class="carousel-inner">
          {movies.map((movie, index) => (
            <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
              <div class="swiper-slide swiper-slide-active">
                <div class="swiper-slide-caption main-section text-center text-md-left">
                  <div class="container">
                    <div class="row row-40 flex-column-reverse flex-md-row justify-content justify-content-lg-between">
                      <div class="col-md-6 col-lg-5 col-xl-6">
                        <ul
                          class="list-movie-info animate__animated animate__fadeInDown"
                          style={{ animationDelay: "2s" }}
                        >
                          <li>{movie.year}</li>
                          <li>imdb: 7,4\10</li>
                          <li>{movie.duration}</li>
                        </ul>
                        <small
                          class="ml-1 text-info animate__animated animate__fadeInDown"
                          style={{ animationDelay: "2.2s" }}
                        >
                          {movie.genre}
                        </small>
                        <h1
                          class="animate__animated animate__fadeInUp ml-4"
                          style={{ fontSize: "4em", animationDelay: "2.4s" }}
                        >
                          {movie.title}
                        </h1>
                        <p
                          class="block-9 animate__animated animate__fadeInUp"
                          style={{ animationDelay: "2.6s" }}
                        >
                          {movie.description}
                        </p>

                        <div
                          class="text-lg-left mt-5 text-center animate__animated animate__fadeInLeft "
                          style={{ animationDelay: "2.9s" }}
                        >
                          <span
                            class="button-custom fadeInUp animated"
                            role="button"
                          >
                            <i class="fas fa-play mx-1"></i>WATCH NOW
                          </span>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-7 col-xl-5 onset-1 animate__animated animate__fadeInRight animate__delay-1s">
                        <div class="slider-image onset-left-2">
                          <img src={movie.img} style={{ width: "422px" }} />
                          <div class="slider-image-title">
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
        class="swiper--button swiper--button-next carousel-control-next my-auto mr-4"
        role="button"
        href="#carouselExampleControls"
        data-slide="next"
      ></div>
      <div
        class="swiper--button swiper--button-prev carousel-control-prev my-auto ml-4"
        role="button"
        href="#carouselExampleControls"
        data-slide="prev"
      ></div>
    </div>
  );
}

export default HomeHeader;
