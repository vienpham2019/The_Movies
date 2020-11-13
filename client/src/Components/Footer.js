function Footer(props) {
  return (
    <footer class="section pb-4" style={{ backgroundColor: "black" }}>
      <div class="footer-modern-main">
        <div class="container">
          <div class="border-bottom">
            <div className="d-flex bd-highlight text-white">
              <div className="p-2 flex-grow-1 bd-highlight ">The Movies</div>
              <div className="p-2 bd-highlight">
                <i class="fab fa-facebook-f m-3"> Facebook</i>
                <i class="fab fa-twitter m-3"> Twitter</i>
                <i class="fab fa-google-plus-g m-3"> Google</i>
                <i class="fab fa-vimeo-v m-3"> Vimeo</i>
                <i class="fas fa-rss m-3"> RSS</i>
              </div>
            </div>
          </div>
          <div class="row row-30 justify-content-lg-between">
            <div class="col-sm-7 col-md-5 col-lg-4">
              <p class="footer-modern-title text-white">Movie Categories</p>
              <div class="footer-modern-item-block">
                <div class="row row-13">
                  <div class="col-6">
                    <ul class="list list-1">
                      <li>Action</li>
                      <li>Adventure</li>
                      <li>Animation</li>
                      <li>Comedy</li>
                      <li>Crime</li>
                    </ul>
                  </div>

                  <div class="col-6">
                    <ul class="list list-1">
                      <li>Drama</li>
                      <li>Fantacy</li>
                      <li>Horror</li>
                      <li>Mystrey</li>
                      <li>Romance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 border-left pl-4">
              <p class="footer-modern-title text-white">Support</p>
              <div class="footer-modern-item-block">
                <ul class="list list-1">
                  <li>My Account</li>
                  <li>FAQ</li>
                  <li>Help Center</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <small class="rights">
          <span>Copyright ©&nbsp; </span>
          <span class="copyright-year">2020</span>
          <span>&nbsp;</span>
          <span>. All rights reserved.&nbsp;</span>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
