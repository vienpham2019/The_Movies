import { A_set_movie_info } from "./reducer/Actions/movie_info_action";
const getDate = (date) => {
  const [year, month, day] = date.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return [months[Math.floor(month)], day, year];
};

const getFirstNGenre = (genre, amount) =>
  genre === "N/A" ? "N/A" : genre.split(", ").slice(0, amount).join(", ");

const getMovieFilter = (m) => {
  let genres = {
    All: 0,
    Action: 0,
    Adventure: 0,
    "Sci-Fi": 0,
    Thriller: 0,
    Biography: 0,
    Crime: 0,
    Drama: 0,
    Music: 0,
    Romance: 0,
    Family: 0,
    Horror: 0,
    Comedy: 0,
    Sport: 0,
    Mystery: 0,
    Animation: 0,
    Short: 0,
    Documentary: 0,
    History: 0,
    War: 0,
    Fantasy: 0,
    Musical: 0,
    Western: 0,
    Adult: 0,
    "Film-Noir": 0,
  };
  let ratings = {};
  let years = {
    "1920-1950": 0,
    "1951-1980": 0,
    "1981-2010": 0,
    "2011-2018": 0,
    "2019-2021": 0,
  };
  for (let movie of m) {
    let year = Math.floor(movie.release_date.split("-")[0]);
    let vote_average = Math.floor(movie.vote_average);
    for (let genre of movie.genre.split(", ")) {
      if (genre === "N/A") continue;
      genres[genre] += 1;
    }
    if (!ratings[vote_average]) ratings[vote_average] = 0;
    ratings[vote_average] += 1;

    if (year >= 2019 && year <= 2021) {
      years["2019-2021"] += 1;
    } else if (year >= 2011 && year <= 2018) {
      years["2011-2018"] += 1;
    } else if (year >= 1981 && year <= 2010) {
      years["1981-2010"] += 1;
    } else if (year >= 1951 && year <= 1980) {
      years["1951-1980"] += 1;
    } else if (year >= 1920 && year <= 1950) {
      years["1920-1950"] += 1;
    }
  }
  return {
    genres,
    years,
    ratings,
  };
};

const randomNumber = (min, max) => Math.random() * (max - min) + min;

const getMovieReviews = async (movie) => {
  let res = await fetch(`http://localhost:3000/get_reviews/${movie.id}`);
  let data = await res.json();
  return data.reviews;
};

export {
  getDate,
  getFirstNGenre,
  getMovieFilter,
  randomNumber,
  getMovieReviews,
};
