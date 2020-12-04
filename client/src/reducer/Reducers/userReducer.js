const initState = {
  user: null,
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.values };

    default:
      return state;
  }
}
