function MoviesFilter(props) {
  const categories = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantacy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thiller",
    "Thriller",
  ];
  const years = [
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
  ];

  const ratings = [10, 9, 8, 7, 6, 5];
  return (
    <div className="top-movies-list mb-4" style={{ maxWidth: "350px" }}>
      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Categories</h2>
        </header>

        <div className="mt-2" style={{ columnCount: 2 }}>
          {categories.map((category, index) => (
            <div className="checkbox-wrapper">
              <input id={`checkbox-${index}`} type="checkbox" />
              <label
                for={`checkbox-${index}`}
                className="text-white checkbox-label m-0 "
              ></label>
              <label className="checkbox-category text-white">{category}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Movies by years</h2>
        </header>

        <div className="mt-2 d-flex flex-wrap">
          {years.map((year) => (
            <div
              className="p-2 bd-highlight col m-2 text-center text-info btn btn-dark"
              role="button"
              style={{ borderRadius: "0" }}
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-2">
        <header className="top-movies-list__header m-0">
          <h2 className="section-movies-list__title">Filter by Rating</h2>
        </header>

        <div className="mt-2 d-flex flex-wrap">
          {ratings.map((rating) => (
            <div
              className="text-info w-100 row m-0 justify-content-between left-underline border-white"
              role="button"
            >
              <div>
                {Array.from(Array(10), (_, i) => {
                  return (
                    <i className={`${i < rating ? "fas" : "far"} fa-star`}></i>
                  );
                })}
              </div>
              <p className="text-white text-right">( {rating} )</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesFilter;
