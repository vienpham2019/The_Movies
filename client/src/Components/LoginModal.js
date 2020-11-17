function LoginModal() {
  return (
    <div className="modal" tabindex="-1" id="login-modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div>
            <div className="card-header px-lg-7 px-3 pt-3 pb-0 border-0 bg-transparent">
              <span
                className="close close-absolute"
                role="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                X
              </span>
              <div className="row d-flex justify-content-center no-gutters">
                <ul className="nav list-inline" role="tablist">
                  <li className="list-inline-item">
                    <a
                      className="nav-link nav-link-lg active"
                      data-toggle="tab"
                      href="#nav-login-modal"
                      role="tab"
                      id="loginModalLinkLogin"
                      aria-controls="nav-login-modal"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="nav-link nav-link-lg"
                      data-toggle="tab"
                      href="#nav-register-modal"
                      role="tab"
                      id="loginModalLinkRegister"
                      aria-controls="nav-register-modal"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="mb-3" />
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="nav-login-modal"
                role="tabpanel"
                aria-labelledby="nav-login-modal-modal-tab"
              >
                <div className="card-block px-lg-7 px-3 pt-6 pb-5">
                  <form>
                    <div className="form-group mb-3">
                      <label className="form--label" for="email">
                        Email *
                      </label>
                      <input className="form-control rounded" type="email" />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form--label" for="password">
                        Password *
                      </label>
                      <input className="form-control rounded" type="password" />
                    </div>

                    <button
                      className="btn_ btn-block_ btn-outline-dark_ border"
                      type="submit"
                    >
                      <i className="fa fa-sign-in-alt mr-2"></i> Log in
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-register-modal"
                role="tabpanel"
                aria-labelledby="nav-register-modal-modal-tab"
              >
                <div className="card-block px-lg-7 px-4 pt-6 pb-5">
                  <form>
                    <div className="form-group mb-3">
                      <label className="form--label" for="name">
                        Name *
                      </label>
                      <input className="form-control rounded" type="name" />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form--label" for="email">
                        Email *
                      </label>
                      <input className="form-control rounded" type="email" />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form--label" for="">
                        Password *
                      </label>
                      <input className="form-control rounded" type="password" />
                    </div>

                    <button
                      className="btn_ btn-block_ btn-outline-dark_ border"
                      type="submit"
                    >
                      <i className="far fa-user mr-2"></i>Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
