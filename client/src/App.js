import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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

import { A_set_top_movies } from "./reducer/Actions/top_movies_action";
import { A_set_movies } from "./reducer/Actions/movies_action";

export default function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    getMovies();
  });

  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await fetch("http://localhost:3000/movie");
    const data = await res.json();
    let popular_movies = data.sort((a, b) => b.popularity - a.popularity);

    let top_ranking_movies = data.sort(
      (a, b) => b.vote_average - a.vote_average
    );

    let newest_movies = top_ranking_movies.filter(
      (movie) =>
        movie.release_date.split("-")[0] === "2020" ||
        movie.release_date.split("-")[0] === "2021"
    );

    dispatch(
      A_set_top_movies(newest_movies, top_ranking_movies, popular_movies)
    );
    dispatch(A_set_movies(data));
    setLoad(false);
  };

  return (
    <div>
      {!load && (
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
      )}
    </div>
  );
}
