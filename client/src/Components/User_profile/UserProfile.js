import PersonalData from "./PersonalData";
export default function UserProfile(props) {
  const profileNav = [
    { key: "Widhlist", icon: "fas fa-plus" },
    { key: "Favorites", icon: "far fa-heart" },
    { key: "Personal data", icon: "fas fa-user-edit" },
    { key: "Change password", icon: "fas fa-lock" },
  ];
  return (
    <section class="pt-7 pb-12 mb-5" style={{ marginTop: "100px" }}>
      <div class="w-100 px-5">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="mb-10" style={{ fontSize: "2rem" }}>
              My Account
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-3">
            <nav class="mb-10 mb-md-0">
              <div class="list-group list-group-sm list-group-strong list-group-flush-x">
                {profileNav.map((value) => (
                  <span
                    class="list-group-item-action p-4 border-bottom d-flex bd-highlight"
                    role="button"
                  >
                    <div className="bd-highlight">
                      <i class={`${value.icon} mr-2`}></i> {value.key}
                    </div>
                    <div className="ml-auto bd-highlight">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </span>
                ))}
              </div>
            </nav>
          </div>
          <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
            <PersonalData />
          </div>
        </div>
      </div>
    </section>
  );
}
