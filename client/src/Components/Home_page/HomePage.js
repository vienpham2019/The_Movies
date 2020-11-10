import PopularMovies from "./PopularMovies";

function HomePage() {
  return (
    <div className="page__content">
      <section
        className="home-section home-movie-section-aside-header has-bg-color dark"
        style={{ paddingBottom: "13px", paddingTop: "9px" }}
      >
        <PopularMovies />
      </section>
    </div>
  );
}

export default HomePage;
