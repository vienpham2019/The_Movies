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

const update_user_info = async (value) => {
  const obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...value,
    }),
  };
  const res = await fetch("http://localhost:3000/update_user_info", obj);
  const data = res.json();
  return data;
};

const add_widhlist = async (movie_id, token) => {
  const obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movie_id,
      token,
    }),
  };

  const res = await fetch("http://localhost:3000/add_widhlist", obj);
  const data = res.json();
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

const handle_update_widhlist = (widhlists, movie) => {
  if (widhlists.has(movie.id)) {
    widhlists.delete(movie.id);
  } else {
    // let widhlist = await add_widhlist(movie.id, token);
    // if (widhlist) {
    widhlists.set(movie.id, movie);
    // }
  }
  return widhlists;
};

const handle_update_favorite = (favorites, movie) => {
  if (favorites.has(movie.id)) {
    favorites.delete(movie.id);
  } else {
    // let widhlist = await add_widhlist(movie.id, token);
    // if (widhlist) {
    favorites.set(movie.id, movie);
    // }
  }
  return favorites;
};

export {
  login,
  register,
  set_widhlists_and_favorites,
  update_user_info,
  add_widhlist,
  handle_update_widhlist,
  handle_update_favorite,
};
