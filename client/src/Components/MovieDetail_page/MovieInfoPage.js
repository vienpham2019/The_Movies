import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import MovieHeader from "./MovieHeader";
import MovieDescription from "./MovieDescription";
import MovieReviews from "./MovieReviews";
import RecommendMovies from "./RecommendMovies";
import { A_movie_page } from "../../reducer/Actions/movies_action";
import "./MovieInfoPage.css";

export default function MovieInfoPage(props) {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieInfoReducer);
  if (!movie) props.history.push("/");
  useEffect(() => dispatch(A_movie_page(0)));
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
