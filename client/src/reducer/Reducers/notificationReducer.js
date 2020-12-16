let initState = {
  notifications: [
    {
      type: "success",
      image: "https://image.tmdb.org/t/p/w500/6pyWDRYKa2pbilTrEPdHaRml9Rs.jpg",
      target: "The Hight Node",
      message: "has been successully add to your Widhlist.",
      time: "12h",
    },
    {
      type: "danger",
      image: "https://image.tmdb.org/t/p/w500/6pyWDRYKa2pbilTrEPdHaRml9Rs.jpg",
      target: "The Hight Node",
      message: "has been successully remove from your Widhlist.",
      time: "12h",
    },
  ],
};

export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return { ...state, ...action.values };
    default:
      return state;
  }
}
