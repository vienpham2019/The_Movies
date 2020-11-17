function NavBar(props) {
  return (
    <nav
      className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar navbar-light border-bottom"
      style={{
        top: "0px",
        backgroundColor: "rgba(0 , 0 , 0 , 0.6)",
        zIndex: "2",
      }}
    >
      <div className="container">
        <span className="navbar-brand py-0">
          <span></span>
        </span>
        <button
          className="navbar-toggler border bg-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <span
                role="button"
                className="btn btn-link"
                onClick={() => {
                  window.scrollTo(0, 0);
                  props.history.push("/");
                }}
              >
                Home
              </span>
            </li>
            <li className="nav-item mx-2">
              <span
                role="button"
                className="btn btn-link"
                onClick={() => {
                  window.scrollTo(0, 0);
                  props.history.push("/movies");
                }}
              >
                Movies
              </span>
            </li>
            <li className="nav-item mx-2">
              <span
                role="button"
                className="btn btn-link"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Logout
              </span>
            </li>

            <li className="nav-item mx-2">
              <span
                className="btn btn-link"
                type="button"
                role="button"
                data-toggle="modal"
                data-target="#login-modal"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <i className="far fa-user mr-2"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
