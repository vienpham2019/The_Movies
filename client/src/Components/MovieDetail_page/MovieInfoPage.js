import { useSelector } from "react-redux";

import MovieHeader from "./MovieHeader";
import MovieDescription from "./MovieDescription";
import MovieReviews from "./MovieReviews";
import RecommendMovies from "./RecommendMovies";
import "./MovieInfoPage.css";

export default function MovieInfoPage(props) {
  const { movie } = useSelector((state) => state.movieInfoReducer);
  if (!movie) props.history.push("/");
  return (
    <div>
      {movie && (
        <div style={{ zIndex: "2" }}>
          <MovieHeader />
          <MovieDescription />
          <RecommendMovies />
          <MovieReviews />
        </div>
      )}
    </div>
  );
}
