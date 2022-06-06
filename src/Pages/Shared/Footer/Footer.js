import React from "react";
import logo from "../../../img/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-dark text-white pt-5">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>

                <img className="img-fluid w-50" src={logo} alt="" />
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    slow issues
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    SLA’s and warranties
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    incoming calls
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    headache
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>Hasna Monjil, TA-39/1</p>
                <p>info@example.com</p>
                <p>+ 01 234 567 88</p>
                <p>+ 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div class="text-center p-4">© 2022 Copyright: ShayemHossain</div>
      </footer>
    </div>
  );
};

export default Footer;
