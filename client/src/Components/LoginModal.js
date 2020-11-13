function LoginModal() {
  return (
    <div class="modal" tabindex="-1" id="login-modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div>
            <div class="card-header px-lg-7 px-3 pt-3 pb-0 border-0 bg-transparent">
              <span
                class="close close-absolute"
                role="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                X
              </span>
              <div class="row d-flex justify-content-center no-gutters">
                <ul class="nav list-inline" role="tablist">
                  <li class="list-inline-item">
                    <a
                      class="nav-link nav-link-lg active"
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
                  <li class="list-inline-item">
                    <a
                      class="nav-link nav-link-lg"
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
              <hr class="mb-3" />
            </div>
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="nav-login-modal"
                role="tabpanel"
                aria-labelledby="nav-login-modal-modal-tab"
              >
                <div class="card-block px-lg-7 px-3 pt-6 pb-5">
                  <form>
                    <div class="form-group mb-3">
                      <label class="form--label" for="email">
                        Email *
                      </label>
                      <input class="form-control rounded" type="email" />
                    </div>
                    <div class="form-group mb-3">
                      <label class="form--label" for="password">
                        Password *
                      </label>
                      <input class="form-control rounded" type="password" />
                    </div>

                    <button
                      class="btn_ btn-block_ btn-outline-dark_ border"
                      type="submit"
                    >
                      <i class="fa fa-sign-in-alt mr-2"></i> Log in
                    </button>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-register-modal"
                role="tabpanel"
                aria-labelledby="nav-register-modal-modal-tab"
              >
                <div class="card-block px-lg-7 px-4 pt-6 pb-5">
                  <form>
                    <div class="form-group mb-3">
                      <label class="form--label" for="name">
                        Name *
                      </label>
                      <input class="form-control rounded" type="name" />
                    </div>
                    <div class="form-group mb-3">
                      <label class="form--label" for="email">
                        Email *
                      </label>
                      <input class="form-control rounded" type="email" />
                    </div>
                    <div class="form-group mb-3">
                      <label class="form--label" for="">
                        Password *
                      </label>
                      <input class="form-control rounded" type="password" />
                    </div>

                    <button
                      class="btn_ btn-block_ btn-outline-dark_ border"
                      type="submit"
                    >
                      <i class="far fa-user mr-2"></i>Register
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
