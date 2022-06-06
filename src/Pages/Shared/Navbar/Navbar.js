import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white py-4">
        <div class="container">
          <a class="navbar-brand text-uppercase fw-bold" href="#">
            bongobondhu
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link px-3" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product & Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Become a Client
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
            <button className="btn btn-success me-2">Login</button>
            <button className="btn btn-info text-white">Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
