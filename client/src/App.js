// import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./Components/Home_page/HomePage";
import MoviesPage from "./Components/Movies_page/MoviesPage";
import MovieInfoPage from "./Components/MovieDetail_page/MovieInfoPage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import MovieTrailerModal from "./Components/MovieTrailerModal";
import UserProfile from "./Components/User_profile/UserProfile";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <Router>
          <Route render={(routerProps) => <NavBar {...routerProps} />} />
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
        </Router>
      </div>
      <MovieTrailerModal />
      <Footer />
      <LoginModal />
    </div>
  );
}

export default App;
