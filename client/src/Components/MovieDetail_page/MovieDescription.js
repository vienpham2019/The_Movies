import { getDate } from "../../helper_method";
import { useState } from "react";
import { connect } from "react-redux";

function MovieDescription(props) {
  const [activeDescription, setActiveDescription] = useState("STORYLINE");
  const {
    overview,
    Genre,
    Language,
    Country,
    release_date,
    Director,
    Writer,
    Actors,
    Awards,
    production_companies,
  } = props.movie;
  const [month, day, year] = getDate(release_date);
  const des_keys = ["STORYLINE", "ADDITIONAL INFOMATION"];
  const storyline = {
    Genre,
    Language,
    Country,
    "Release Date": `${month} ${day}, ${year}`,
  };

  const addition_infomation = {
    Director,
    Actors,
    Awards,
    Writer,
  };

  return (
    <div className="container">
      <ul className="flex-column flex-sm-row nav nav--row">
        {des_keys.map((value) => (
          <li
            className={`nav--item ${
              activeDescription === value ? " active" : ""
            }`}
            role="button"
            onClick={() => setActiveDescription(value)}
          >
            {value}
          </li>
        ))}
      </ul>
      <div className="tab-content py-4">
        {/* story line */}
        <div
          className={`tab-pane px-3 ${
            activeDescription === "STORYLINE" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-md-7">
              <p className="text-muted">{overview}</p>
            </div>
            <div className="col-md-5 border-left">
              <ul>
                {Object.entries(storyline).map(([key, value]) => (
                  <li className="pl-3 py-2 my-2 text-white bg--light--gray">
                    <strong className="text-secondary">{key}: </strong>
                    <span className="text-dark ">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* end  */}
        {/* Addition infomation */}
        <div
          className={`tab-pane px-3 ${
            activeDescription === "ADDITIONAL INFOMATION" ? "active" : ""
          }`}
        >
          <div class="d-flex flex-wrap">
            <div className="card mx-2 p-3 rounded-0 shadow">
              <h5 className="card-title border-bottom ">
                Production Companies
              </h5>
              <div
                className="custom-scrollbar d-flex flex-wrap justify-content-center"
                style={{
                  maxHeight: "100px",
                  overflowY: "auto",
                }}
              >
                {production_companies.map((company) => (
                  <img
                    className="p-3 border m-2 bd-highlight"
                    src={company.logo_path}
                    alt={company.name}
                    style={{ maxWidth: "9rem" }}
                  />
                ))}
              </div>
            </div>
            {Object.entries(addition_infomation).map(([key, value]) => (
              <div className="card p-3 mx-2 rounded-0 shadow">
                <h5 className="card-title border-bottom">{key}</h5>
                {key === "Awards" ? (
                  <span className="card-text ml-2 text-secondary">{value}</span>
                ) : (
                  <ul
                    className="card-text ml-2 text-secondary custom-scrollbar"
                    style={{
                      maxHeight: "100px",
                      overflowY: "auto",
                    }}
                  >
                    {value.split(", ").map((val) => (
                      <li> &#10731; {val}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* end  */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieInfoReducer.movie,
});

export default connect(mapStateToProps)(MovieDescription);
