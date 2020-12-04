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

export { login, register };
