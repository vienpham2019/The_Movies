import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./Components/Home_page/HomePage";
import MoviesPage from "./Components/Movies_page/MoviesPage";
import MovieInfoPage from "./Components/MovieDetail_page/MovieInfoPage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import MovieTrailerModal from "./Components/MovieTrailerModal";
import UserProfile from "./Components/User_profile/UserProfile";
import PageNotFound from "./Components/PageNotFound";

function App(props) {
  useEffect(() => {
    getMovies();
  });

  const getMovies = async () => {
    const res = await fetch("http://localhost:3000/movie");
    const data = await res.json();
    let top_5_newest_popular = data
      .filter((movie) => movie.release_date.split("-")[0] === "2020")
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 6);

    props.setMovies(data, top_5_newest_popular);
  };

  return (
    <div>
      <div>
        <Router>
          <Route render={(routerProps) => <NavBar {...routerProps} />} />
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              exact
              path="/movie_info"
              render={(routerProps) => <MovieInfoPage {...routerProps} />}
            />
            <Route
              exact
              path="/movies"
              render={(routerProps) => <MoviesPage {...routerProps} />}
            />
            <Route
              exact
              path="/user_profile"
              render={(routerProps) => <UserProfile {...routerProps} />}
            />
            <Route
              path="*"
              render={(routerProps) => <PageNotFound {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
      <MovieTrailerModal />
      <Footer />
      <LoginModal />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: (movies, home_header_movies) =>
      dispatch({ type: "SET_MOVIES", values: { movies, home_header_movies } }),
  };
};

export default connect(null, mapDispatchToProps)(App);
