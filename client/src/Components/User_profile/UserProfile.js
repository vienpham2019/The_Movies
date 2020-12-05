import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PersonalData from "./PersonalData";
import ChangePassword from "./ChangePassword";
import Favorites_Widhlist from "./Favorites_Widhlist";
import {
  A_movie_page,
  A_set_fillter_genre_and_year,
  A_set_sort_movies_by,
  A_filter_movies,
} from "../../reducer/Actions/movies_action";
export default function UserProfile(props) {
  const dispatch = useDispatch();
  const [nav_content, setNavContent] = useState("Personal data");
  const { user, widhlists, favorites } = useSelector(
    (state) => state.userReducer
  );
  const profileNav = [
    { key: "Widhlist", icon: "fas fa-plus" },
    { key: "Favorites", icon: "far fa-heart" },
    { key: "Personal data", icon: "fas fa-user-edit" },
    { key: "Change password", icon: "fas fa-lock" },
  ];

  useEffect(() => {
    if (!user) {
      props.history.push("/");
      document.getElementById("login_nav_button").click();
    }
  });

  return (
    <section
      class="pt-7 pb-12 mb-5 w-100 overflow-hidden"
      style={{ marginTop: "120px", minHeight: "60vh" }}
    >
      <div class="w-100">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-3 bg-light p-4 m-2">
            <h6 class="text-muted mb-5 text-uppercase">
              WELCOME, {user && `${user.first_name} ${user.last_name}`}!
            </h6>
            <nav class="mb-10 mb-md-0">
              <div class="list-group list-group-sm list-group-strong list-group-flush-x">
                {profileNav.map((value) => (
                  <div>
                    <span
                      class="list-group-item-action p-4 border-bottom d-flex bd-highlight"
                      role="button"
                      onClick={() => {
                        if (
                          value.key === "Favorites" ||
                          value.key === "Widhlist"
                        ) {
                          dispatch(A_movie_page(0));
                          dispatch(A_set_fillter_genre_and_year("All", " "));
                          dispatch(A_set_sort_movies_by("Years"));
                          dispatch(
                            A_filter_movies(
                              value.key === "Favorites"
                                ? Array.from(favorites.values())
                                : Array.from(widhlists.values())
                            )
                          );
                        }
                        setNavContent(value.key);
                      }}
                    >
                      <div className="bd-highlight">
                        <i class={`${value.icon} mr-2`}></i> {value.key}
                      </div>
                      <div className="ml-auto bd-highlight">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </span>
                  </div>
                ))}

                <span
                  class="list-group-item-action p-4 border-bottom d-flex bd-highlight"
                  role="button"
                  onClick={() => props.history.push("/")}
                >
                  <div className="bd-highlight">
                    <i class="fas fa-sign-out-alt mr-2"></i> Logout
                  </div>
                  <div className="ml-auto bd-highlight">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </span>
              </div>
            </nav>
          </div>
          {user && (
            <div class="col-12 col-md-8 bg-light m-2 p-0">
              {nav_content === "Widhlist" && (
                <Favorites_Widhlist
                  title={"Widhlist"}
                  history={props.history}
                />
              )}
              {nav_content === "Favorites" && (
                <Favorites_Widhlist
                  title={"Favorites"}
                  history={props.history}
                />
              )}
              {nav_content === "Personal data" && <PersonalData />}
              {nav_content === "Change password" && <ChangePassword />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
