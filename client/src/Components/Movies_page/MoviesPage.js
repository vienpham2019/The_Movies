import { useState } from "react";
import DisplayMovies from "./DisplayMovies";
import MoviesFilter from "./MoviesFilter";
function MoviesPage() {
  const [vodi_value, setVodiValue] = useState("grid");
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
  ];

  return (
    <div
      class="home-section section-movies-list"
      style={{ paddingTop: "90px" }}
    >
      <div class="mx-auto" style={{ width: "80%" }}>
        <div class="section-movies-list__inner">
          <div class="top-movies-list" style={{ maxWidth: "350px" }}>
            <header class="top-movies-list__header">
              <h2 class="section-movies-list__title">Top 5 List</h2>
            </header>
            <div class="top-movies-list__info">
              <div class="masvideos masvideos-movies">
                <div class="movies columns-1">
                  <div class="movies__inner">
                    {top_9_of_week.map((value) => (
                      <div
                        class="post-2930 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action hvr-shrink"
                        role="button"
                      >
                        <div class="movie-list">
                          <div class="movie-list__body">
                            <span class="movie-list__year">{value.year}</span>
                            <h3 class="movie-list__name">{value.title}</h3>
                            <span class="movie-list__genre">{value.genre}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="featured-with-list-view-movies-list">
            <header class="featured-with-list-view-movies-list__header">
              <h2 class="section-movies-list__title">Movies</h2>
            </header>
            {/*  */}
            <div class="vodi-control-bar d-flex flex-row-reverse bd-highlight">
              <ul class="archive-view-switcher p-2 bd-highlight">
                {vodi.map((value) => (
                  <li
                    class={
                      vodi_value === value.type
                        ? "nav-item bg-info"
                        : "nav-item"
                    }
                    role="button"
                    onClick={() => setVodiValue(value.type)}
                  >
                    <span class="mx-2">
                      <i class={value.value + " text-white"}></i>
                    </span>
                  </li>
                ))}
              </ul>
              <div class="movies-ordering">
                <div class="handheld-sidebar-toggle">
                  <button class="btn sidebar-toggler" type="button">
                    <i class="fas fa-sliders-h"></i>
                    <span>Filters</span>
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div class="featured-with-list-view-movies-list__info">
              <div class="list-view-movies-list">
                <DisplayMovies movies={movies} vodi_value={vodi_value} />
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoviesPage;

{
  /* <div class="vodi-control-bar d-flex flex-row-reverse bd-highlight">
              <ul class="archive-view-switcher p-2 bd-highlight">
                {vodi.map((value) => (
                  <li
                    class={
                      vodi_value === value.type
                        ? "nav-item bg-info"
                        : "nav-item"
                    }
                    role="button"
                    onClick={() => setVodiValue(value.type)}
                  >
                    <span class="mx-2">
                      <i class={value.value + " text-white"}></i>
                    </span>
                  </li>
                ))}
              </ul>
              <div class="movies-ordering">
                <div class="handheld-sidebar-toggle">
                  <button class="btn sidebar-toggler" type="button">
                    <i class="fas fa-sliders-h"></i>
                    <span>Filters</span>
                  </button>
                </div>
              </div>
            </div> */
}
