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

const remove_widhlist = async (movie_id, token) => {
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

  const res = await fetch("http://localhost:3000/remove_widhlist", obj);
  const data = res.json();
  return data;
};

const set_widhlists_and_favorites = (_widhlists, _favorites) => {
  let widhlists = new Map();
  let favorites = new Map();
  for (let w_movie of _widhlists) {
    widhlists.set(w_movie.movie_id, w_movie.movie);
  }
  for (let f_movie of _favorites) {
    favorites.set(f_movie.movie_id, f_movie.movie);
  }
  return { widhlists, favorites };
};

const handle_update_widhlist = async (widhlists, movie, token) => {
  let data;
  if (widhlists.has(movie.id)) {
    data = await remove_widhlist(movie.id, token);
    if (data) widhlists.delete(movie.id);
  } else {
    if (await add_widhlist(movie.id, token)) widhlists.set(movie.id, movie);
  }
  return widhlists;
};

const handle_update_favorite = async (favorites, movie, token) => {
  if (favorites.has(movie.id)) {
    favorites.delete(movie.id);
  } else {
    favorites.set(movie.id, movie);
  }
  return favorites;
};

export {
  login,
  register,
  set_widhlists_and_favorites,
  update_user_info,
  handle_update_widhlist,
  handle_update_favorite,
};
