import { useState } from "react";
import DisplayMovies from "./DisplayMovies";
import MoviesFilter from "./MoviesFilter";
import TopMovies from "./TopMovies";
import Pagination from "./Pagination";
import "./Movies.css";

function MoviesPage() {
  const [vodi_value, setVodiValue] = useState("grid");
  const [displaySideBar, setSideBar] = useState(false);
  let vodi = [
    { type: "grid", value: "fas fa-th" },
    { type: "grid-extended", value: "fas fa-th-large" },
    { type: "list-large", value: "fas fa-list-ul" },
    { type: "list", value: "fas fa-bars" },
  ];

  let top_9_of_week = [
    { title: "Delta Brovo", year: "2017", genre: "Action" },
    { title: "Mad", year: "2016", genre: "Drama" },
    { title: "Oh Lucky", year: "2018", genre: "Action, Comedy" },
    { title: "Euphoria", year: "2018", genre: "Action, Adventure" },
    { title: "Black Mirror", year: "2018", genre: "Action, Adventure" },
    {
      title: "The Conveninet Groom",
      year: "2016",
      genre: "Action, Adventure, Romance",
    },
    { title: "Paradigm Lost", year: "2017", genre: "Action, Documentary" },
    { title: "Pacific Rim: Uprising", year: "2019", genre: "Action, Sci-Fi" },
    { title: "Dirt", year: "2019", genre: "Action, Sport" },
  ];

  let movies = [
    {
      title: "Sorry We Missed You",
      img:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBSXjofp2j7jsWROYreJq2LrM8ne5bPJr38NulVC0SBkXZrSWv",
      genre: "Drama",
      duration: "1h 41m",
      year: "2019",
      description:
        "Hoping that self-employment through gig economy can solve their financial woes, a hard-up UK delivery driver and his wife struggling to raise a family end up trapped in the vicious circle of this modern-day form of labour exploitation.",
    },
    {
      title: "Avengers: Endgame",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      genre: "Action, Adventure, Science fiction",
      duration: "3h 2m",
      year: "2018",
      description:
        "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. ... The film serves as a conclusion to the story of the MCU up to that point, ending the story arcs for several main characters.",
    },
    {
      title: "Over the Moon",
      img:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGkUUnXvilYpVTzT20DTPFyJGV1iujXqBaj4CxDAu5lDanmPgO",
      genre: "Animation, Comedy, Adventure",
      duration: "1h 40m",
      year: "2019",
      description:
        "Netflix's “Over the Moon” is the story of a girl who goes to the lunar surface and finds a Disney castle, a Disney princess, and even an Olaf character. ... Fei Fei (Cathy Ang) is a girl who suffers the horrible grief of losing her mother at a young age.",
    },
    {
      title: "Sorry We Missed You",
      img:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBSXjofp2j7jsWROYreJq2LrM8ne5bPJr38NulVC0SBkXZrSWv",
      genre: "Drama",
      duration: "1h 41m",
      year: "2019",
      description:
        "Hoping that self-employment through gig economy can solve their financial woes, a hard-up UK delivery driver and his wife struggling to raise a family end up trapped in the vicious circle of this modern-day form of labour exploitation.",
    },
    {
      title: "Avengers: Endgame",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      genre: "Action, Adventure, Science fiction",
      duration: "3h 2m",
      year: "2018",
      description:
        "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. ... The film serves as a conclusion to the story of the MCU up to that point, ending the story arcs for several main characters.",
    },
    {
      title: "Over the Moon",
      img:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGkUUnXvilYpVTzT20DTPFyJGV1iujXqBaj4CxDAu5lDanmPgO",
      genre: "Animation, Comedy, Adventure",
      duration: "1h 40m",
      year: "2019",
      description:
        "Netflix's “Over the Moon” is the story of a girl who goes to the lunar surface and finds a Disney castle, a Disney princess, and even an Olaf character. ... Fei Fei (Cathy Ang) is a girl who suffers the horrible grief of losing her mother at a young age.",
    },
    {
      title: "Sorry We Missed You",
      img:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBSXjofp2j7jsWROYreJq2LrM8ne5bPJr38NulVC0SBkXZrSWv",
      genre: "Drama",
      duration: "1h 41m",
      year: "2019",
      description:
        "Hoping that self-employment through gig economy can solve their financial woes, a hard-up UK delivery driver and his wife struggling to raise a family end up trapped in the vicious circle of this modern-day form of labour exploitation.",
    },
    {
      title: "Avengers: Endgame",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      genre: "Action, Adventure, Science fiction",
      duration: "3h 2m",
      year: "2018",
      description:
        "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. ... The film serves as a conclusion to the story of the MCU up to that point, ending the story arcs for several main characters.",
    },
    {
      title: "Avengers: Endgame",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      genre: "Action, Adventure, Science fiction",
      duration: "3h 2m",
      year: "2018",
      description:
        "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. ... The film serves as a conclusion to the story of the MCU up to that point, ending the story arcs for several main characters.",
    },
  ];

  return (
    <div
      className="home-section section-movies-list w-100 m-0"
      style={{ paddingTop: "90px" }}
    >
      <div className="mx-auto widget-area" style={{ width: "90%" }}>
        <div className="section-movies-list__inner">
          {/*  */}
          <div className={`sidebar ${displaySideBar ? "active" : ""}`}>
            <div
              className="dismiss"
              role="button"
              onClick={() => setSideBar(!displaySideBar)}
            >
              <i className="fas fa-times"></i>
            </div>
            <MoviesFilter />
            <TopMovies movies={top_9_of_week} />
          </div>

          <div className="featured-with-list-view-movies-list pl-4">
            <header className="featured-with-list-view-movies-list__header">
              <div className="row w-100 m-0">
                <h2 className="section-movies-list__title">Movies</h2>
                <input
                  type="text"
                  className="mx-auto w-50 text-white rounded-pill border-white movies-search"
                  style={{ maxHeight: "30px" }}
                  placeholder="Search..."
                />
              </div>
            </header>
            {/*  */}
            <ul className="d-flex justify-content-end">
              {vodi.map((value) => (
                <li
                  className={`mx-1 vodi-button ${
                    vodi_value === value.type ? "nav-item bg-info" : "nav-item"
                  }`}
                  role="button"
                  onClick={() => setVodiValue(value.type)}
                >
                  <span className="mx-2">
                    <i className={value.value + " text-white"}></i>
                  </span>
                </li>
              ))}
              <li
                className="ml-4 px-3 sidebar--toggler border text-center"
                role="button"
                onClick={() => setSideBar(!displaySideBar)}
              >
                <span className="text-white">
                  <i className="fas fa-sliders-h mr-1"></i>
                  <span>Filters</span>
                </span>
              </li>
            </ul>

            <div>
              <DisplayMovies movies={movies} vodi_value={vodi_value} />
              <hr />
              <Pagination />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoviesPage;
