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
  genre.split(", ").slice(0, amount).join(", ");

export { getDate, getFirstNGenre };
