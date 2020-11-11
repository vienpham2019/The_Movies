import PopularMovies from "./PopularMovies";
import TopRankingMovies from "./TopRankingMovies";
import MidSection from "./MidSection";
import "./HomePage.css";

function HomePage() {
  let top_3 = [
    {
      title: "Sorry We Missed You",
      img:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBSXjofp2j7jsWROYreJq2LrM8ne5bPJr38NulVC0SBkXZrSWv",
      genre: "Drama",
      duration: "1h 41m",
      description:
        "Hoping that self-employment through gig economy can solve their financial woes, a hard-up UK delivery driver and his wife struggling to raise a family end up trapped in the vicious circle of this modern-day form of labour exploitation.",
    },
    {
      title: "Avengers: Endgame",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      genre: "Action, Adventure, Science fiction",
      duration: "3h 2m",
      description:
        "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. ... The film serves as a conclusion to the story of the MCU up to that point, ending the story arcs for several main characters.",
    },
    {
      title: "Over the Moon",
      img:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGkUUnXvilYpVTzT20DTPFyJGV1iujXqBaj4CxDAu5lDanmPgO",
      genre: "Animation, Comedy, Adventure",
      duration: "1h 40m",
      description:
        "Netflix's “Over the Moon” is the story of a girl who goes to the lunar surface and finds a Disney castle, a Disney princess, and even an Olaf character. ... Fei Fei (Cathy Ang) is a girl who suffers the horrible grief of losing her mother at a young age.",
    },
  ];
  return (
    <div className="page__content">
      <section
        className="home-section home-movie-section-aside-header has-bg-color dark"
        style={{ paddingBottom: "13px", paddingTop: "9px" }}
      >
        <PopularMovies />
      </section>
      <MidSection top_3={top_3} />
      <section
        className="home-section section-movies-carousel-flex-header has-bg-color bg-light style-2"
        style={{ paddingBottom: "10px", paddingTop: "60px" }}
      >
        <TopRankingMovies />
      </section>
    </div>
  );
}

export default HomePage;
