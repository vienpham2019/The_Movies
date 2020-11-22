import MovieHeader from "./MovieHeader";
import MovieDescription from "./MovieDescription";
import MovieReviews from "./MovieReviews";
import RecommendMovies from "./RecommendMovies";
import "./MovieInfoPage.css";
function MovieInfoPage(props) {
  return (
    <div style={{ zIndex: "2" }}>
      <MovieHeader />
      <MovieDescription />
      <RecommendMovies />
      <MovieReviews />
    </div>
  );
}

export default MovieInfoPage;
