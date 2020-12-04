import DisplayMovies from ".././Movies_page/DisplayMovies";
import Pagination from ".././Pagination";
import { useSelector } from "react-redux";

import { useState } from "react";
function Favorites_Widhlist(props) {
  let { title } = props;
  let { widhlists, favorites } = useSelector((state) => state.userReducer);
  let movies =
    title === "Widhlist"
      ? Array.from(widhlists.values())
      : Array.from(favorites.values());
  const displayAmount = 10;
  const [displayMovies, setDisplayMovies] = useState(
    movies.slice(0, displayAmount)
  );
  const pages = Math.ceil(movies.length / displayAmount);

  const handleDisplayPage = (page) =>
    setDisplayMovies(
      movies.slice((page - 1) * displayAmount, page * displayAmount)
    );
  return (
    <div className="bg-dark p-4 h-100">
      <h4 className="mb-4 border-bottom pb-2">
        {" "}
        <span className="py-3 bg-dark text-white">{title}</span>
      </h4>
      {movies.length ? (
        <DisplayMovies
          movies={displayMovies}
          vodi_value={"grid"}
          history={props.history}
        />
      ) : (
        <div className="p-5 text-center">
          <i className="fas fa-clipboard-list text-white fa-4x py-3"></i> <br />
          <span className="text-white" style={{ fontSize: "2em" }}>
            Your {title} is empty!
          </span>
        </div>
      )}
      {pages > 1 && (
        <div>
          <hr />
          <Pagination pages={pages} handleDisplay={handleDisplayPage} />
        </div>
      )}
    </div>
  );
}

export default Favorites_Widhlist;
