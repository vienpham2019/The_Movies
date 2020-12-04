const A_set_user = (data, widhlists_and_favorites) => {
  let { user, token } = data;
  let { dob, gender, first_name, last_name, email } = user;
  return {
    type: "SET_USER",
    values: {
      user: { dob, gender, first_name, last_name, email },
      ...widhlists_and_favorites,
      token,
    },
  };
};

export { A_set_user };
