import PopularMovies from "./PopularMovies";
import TopActionAndDramaMovies from "./TopActionAndDramaMovies";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="page__content">
      <section
        className="home-section home-movie-section-aside-header has-bg-color dark"
        style={{ paddingBottom: "13px", paddingTop: "9px" }}
      >
        <PopularMovies />
      </section>
      <section
        className="home-section section-movies-carousel-aside-header has-section-header has-bg-color light more-light header-right"
        style={{ paddingTop: "59px", paddingBottom: "18px" }}
      >
        <TopActionAndDramaMovies />
      </section>
    </div>
  );
}

export default HomePage;
