const login = async (email, password) => {
  const obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const res = await fetch("http://localhost:3000/login", obj);
  const data = await res.json();
  return data;
};

const register = async (value) => {
  const obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...value,
    }),
  };
  const res = await fetch("http://localhost:3000/register", obj);
  const data = await res.json();
  return data;
};

const set_widhlists_and_favorites = (movies, _widhlists, _favorites) => {
  let widhlists = new Map();
  let favorites = new Map();
  for (let movie of movies) {
    if (_widhlists.has(movie.id)) widhlists.set(movie.id, movie);
    if (_favorites.has(movie.id)) favorites.set(movie.id, movie);
  }
  return { widhlists, favorites };
};

export { login, register, set_widhlists_and_favorites };
