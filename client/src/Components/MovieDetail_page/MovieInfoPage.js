import MovieHeader from "./MovieHeader";
import MovieDescription from "./MovieDescription";
import MovieReviews from "./MovieReviews";
import "./MovieInfoPage.css";
function MovieInfoPage(props) {
  const movie = {
    popularity: 20.449,
    vote_count: 3214,
    poster_path:
      "https://image.tmdb.org/t/p/w500/r7V92gY3AMO6li17MmGTixAnFcv.jpg",
    id: 10545,
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/oslaee3VX9kJAjVezbjZKlEJDzn.jpg",
    title: "The Hunchback of Notre Dame",
    vote_average: 7,
    overview:
      "When Quasimodo defies the evil Frollo and ventures out to the Festival of Fools, the cruel crowd jeers him. Rescued by fellow outcast the gypsy Esmeralda, Quasi soon finds himself battling to save the people and the city he loves.",
    release_date: "1996-06-21",
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    imdb_id: "tt0116583",
    Runtime: "91 min",
    Genre: "Animation, Drama, Family, Musical, Romance",
    Director: "Gary Trousdale, Kirk Wise",
    Writer:
      'Tab Murphy (animation story by), Victor Hugo (from the novel "Notre Dame de Paris" by), Tab Murphy (animation screenplay by), Irene Mecchi (animation screenplay by), Bob Tzudiker (animation screenplay by), Noni White (animation screenplay by), Jonathan Roberts (animation screenplay by), Kevin Harkey (story), Gaëtan Brizzi (story), Paul Brizzi (story), Ed Gombert (story), Brenda Chapman (story), Jeff Snow (story), Jim Capobianco (story), Denis Rich (story), Burny Mattinson (story), John Sanford (story), Kelly Wightman (story), James Fujii (story), Geefwee Boedoe (story), Floyd Norman (story), Francis Glebas (story), Kirk Hanson (story), Christine Blum (story), Sue C. Nichols (story), Will Finn (additional screenplay material by)',
    Actors: "Jason Alexander, Mary Kay Bergman, Corey Burton, Jim Cummings",
    Plot:
      "A deformed bell-ringer must assert his independence from a vicious government minister in order to help his friend, a gypsy dancer.",
    Language: "English, Latin",
    Country: "USA, France",
    Awards: "Nominated for 1 Oscar. Another 8 wins & 21 nominations.",
    videos: [
      {
        videoUrl: "https://www.youtube.com/embed/H4chVzr6RLg",
        videoName: "The Hunchback of Notre Dame",
      },
      {
        videoUrl: "https://www.youtube.com/embed/JUEofxUjbpM",
        videoName:
          "The Hunchback of Notre Dame - 1996 Teaser Trailer (UK Version)",
      },
    ],
    reivewScore: 6,
    movieReviews: [
      {
        author: "narrator56",
        date: "FEBRUARY 3, 2020",
        score: 6,
        content:
          "I think this is one of the best animated feature films I have ever seen, perhaps even the best one. It is very imaginative, for a start, colorful in ways that capture the eye, and its message is as deep as you want it to be.\r\n\r\nBy that I mean it would be productive and fun to watch this with children of all ages. The older or more mature the child is, the deeper you can delve into the issues of what to do about feelings of anger, sadness, and so on. With young children, you could even watch it first time through as it is, and save comments or life lessons for additional viewings. There is plenty of action and humor to be found here to entertain hem on that level.\r\n\r\nAnd as a side note, we have no small children to watch this with, but it is also a good movie for adults to settle into, especially during times of stress or worry. We read a recommendation for it during the COVID19 crisis.",
      },
    ],
    production_companies: [
      {
        name: "Walt Disney Pictures",
        logo_path:
          "https://image.tmdb.org/t/p/w500/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      },
      {
        name: "Pixar",
        logo_path:
          "https://image.tmdb.org/t/p/w500/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
      },
    ],
  };
  return (
    <div style={{ zIndex: "2" }}>
      <MovieHeader movie={movie} />
      <MovieDescription movie={movie} />
      <MovieReviews movie={movie} />
    </div>
  );
}

export default MovieInfoPage;
