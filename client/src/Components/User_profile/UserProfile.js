import { useState } from "react";
import PersonalData from "./PersonalData";
import ChangePassword from "./ChangePassword";
import Favorites_Widhlist from "./Favorites_Widhlist";
export default function UserProfile(props) {
  const [nav_content, setNavContent] = useState("Personal data");
  const profileNav = [
    { key: "Widhlist", icon: "fas fa-plus" },
    { key: "Favorites", icon: "far fa-heart" },
    { key: "Personal data", icon: "fas fa-user-edit" },
    { key: "Change password", icon: "fas fa-lock" },
  ];
  return (
    <section
      class="pt-7 pb-12 mb-5"
      style={{ marginTop: "120px", minHeight: "60vh" }}
    >
      <div class="w-100 px-5">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-3 bg-light p-4 m-2">
            <h6 class="text-muted mb-5">WELCOME, JOHN DOE!</h6>
            <nav class="mb-10 mb-md-0">
              <div class="list-group list-group-sm list-group-strong list-group-flush-x">
                {profileNav.map((value) => (
                  <span
                    class="list-group-item-action p-4 border-bottom d-flex bd-highlight"
                    role="button"
                    onClick={() => setNavContent(value.key)}
                  >
                    <div className="bd-highlight">
                      <i class={`${value.icon} mr-2`}></i> {value.key}
                    </div>
                    <div className="ml-auto bd-highlight">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </span>
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
          <div class="col-12 col-md-9 col-lg-8 bg-light m-2 p-0">
            {nav_content === "Widhlist" && (
              <Favorites_Widhlist title={"Widhlist"} />
            )}
            {nav_content === "Favorites" && (
              <Favorites_Widhlist title={"Favorites"} />
            )}
            {nav_content === "Personal data" && <PersonalData />}
            {nav_content === "Change password" && <ChangePassword />}
          </div>
        </div>
      </div>
    </section>
  );
}
