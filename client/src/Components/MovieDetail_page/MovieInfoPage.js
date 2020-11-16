import MovieHeader from "./MovieHeader";
import "./MovieInfoPage.css";
function MovieInfoPage(props) {
  const movie = {
    title: "Over the Moon",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Venom_%282018_film_poster%29.png/220px-Venom_%282018_film_poster%29.png",
    genre: "Animation, Comedy, Adventure",
    duration: "1h 40m",
    year: "2019",
    description:
      "Netflix's “Over the Moon” is the story of a girl who goes to the lunar surface and finds a Disney castle, a Disney princess, and even an Olaf character. ... Fei Fei (Cathy Ang) is a girl who suffers the horrible grief of losing her mother at a young age.",
  };
  return (
    <div style={{ zIndex: "2" }}>
      <MovieHeader movie={movie} />
    </div>
  );
}

export default MovieInfoPage;
