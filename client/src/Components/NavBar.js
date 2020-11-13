function NavBar() {
  return (
    <nav
      class="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar navbar-light bg-white"
      style={{ top: "0px" }}
    >
      <div class="container">
        <span class="navbar-brand py-0">
          <span></span>
        </span>
        <button
          class="navbar-toggler"
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
              <span role="button" class="nav-link btn btn-link">
                Home
              </span>
            </li>
            <li class="nav-item mx-2">
              <span role="button" class="nav-link btn btn-link">
                Home
              </span>
            </li>
            <li class="nav-item mx-2">
              <span role="button" class="nav-link btn btn-link">
                Home
              </span>
            </li>

            <li class="nav-item mx-2">
              <span
                class="nav-link btn btn-link"
                type="button"
                role="button"
                data-toggle="modal"
                data-target="#login-modal"
              >
                <i class="far fa-user mr-2"></i>Login
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
