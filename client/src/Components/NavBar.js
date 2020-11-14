function NavBar(props) {
  return (
    <nav
      class="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar navbar-light border-bottom"
      style={{
        top: "0px",
        backgroundColor: "rgba(0 , 0 , 0 , 0.6)",
        zIndex: "1",
      }}
    >
      <div class="container">
        <span class="navbar-brand py-0">
          <span></span>
        </span>
        <button
          class="navbar-toggler border bg-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <span
                role="button"
                class="btn btn-link"
                onClick={() => {
                  window.scrollTo(0, 0);
                  props.history.push("/");
                }}
              >
                Home
              </span>
            </li>
            <li class="nav-item mx-2">
              <span
                role="button"
                class="btn btn-link"
                onClick={() => {
                  window.scrollTo(0, 0);
                  props.history.push("/movies");
                }}
              >
                Movies
              </span>
            </li>
            <li class="nav-item mx-2">
              <span
                role="button"
                class="btn btn-link"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Logout
              </span>
            </li>

            <li class="nav-item mx-2">
              <span
                class="btn btn-link"
                type="button"
                role="button"
                data-toggle="modal"
                data-target="#login-modal"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <i class="far fa-user mr-2"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
