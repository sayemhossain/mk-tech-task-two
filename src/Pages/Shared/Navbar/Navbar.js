import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light py-4">
        <div class="container">
          <a class="navbar-brand text-uppercase fw-bold text-danger" href="#">
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
                <Link class="nav-link px-3" aria-current="page" to="/">
                  Home
                </Link>
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
                <Link class="nav-link" to="/about">
                  About us
                </Link>
              </li>
            </ul>
            <button className="btn btn-success btn-sm me-2 ">Login</button>
            <button className="btn btn-outline-danger btn-sm ">Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
