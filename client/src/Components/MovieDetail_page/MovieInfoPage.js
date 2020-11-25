import { connect } from "react-redux";
import { useEffect } from "react";

import MovieHeader from "./MovieHeader";
import MovieDescription from "./MovieDescription";
import MovieReviews from "./MovieReviews";
import RecommendMovies from "./RecommendMovies";
import "./MovieInfoPage.css";

function MovieInfoPage(props) {
  let { movie } = props;
  useEffect(() => {
    if (!movie) props.history.push("/");
  });
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

const mapStateToProps = (state) => ({
  movie: state.movieInfoReducer.movie,
});

export default connect(mapStateToProps)(MovieInfoPage);
