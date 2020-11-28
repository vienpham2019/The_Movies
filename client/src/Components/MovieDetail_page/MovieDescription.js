import { getDate } from "../../helper_method";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function MovieDescription() {
  const [activeDescription, setActiveDescription] = useState("STORYLINE");

  const {
    overview,
    genre,
    language,
    country,
    release_date,
    director,
    writers,
    actors,
    awards,
    production_companies,
  } = useSelector((state) => state.movieInfoReducer.movie);
  const [month, day, year] = getDate(release_date);
  const des_keys = ["STORYLINE", "ADDITIONAL INFOMATION"];
  const storyline = {
    genre,
    language,
    country,
    "Release Date": `${month} ${day}, ${year}`,
  };

  const addition_infomation = {
    director,
    actors,
    awards,
    writers,
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
                className="custom-scrollbar card-columns h-auto"
                style={{
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {production_companies.map((company) => (
                  <div
                    className="text-center p-2 my-2 card border-0"
                    style={{ maxWidth: "20em" }}
                  >
                    <div className="border-bottom border-right shadow-sm">
                      {company.logo_path.match(/null$/) ? (
                        <div className="p-4">
                          <strong className="movie_logo_title ">
                            <i class="fas fa-film fa-2x mr-2"></i>{" "}
                            {company.name}
                          </strong>
                        </div>
                      ) : (
                        <img
                          className="img-fluid p-5"
                          src={company.logo_path}
                          alt={company.name}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {Object.entries(addition_infomation).map(([key, value]) => (
              <div
                className="card p-3 mx-2 rounded-0 shadow"
                style={{ minWidth: "300px", minHeight: "150px" }}
              >
                <h5
                  className="card-title border-bottom"
                  style={{ textTransform: "capitalize" }}
                >
                  {key}
                </h5>
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
                    {value === "N/A" ? (
                      <li>N/A</li>
                    ) : (
                      value.split(", ").map((val) => <li> &#10731; {val}</li>)
                    )}
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
