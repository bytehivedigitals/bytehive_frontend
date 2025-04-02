import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CurvedNavbar.css"; // Custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-primary fw-bold" href="#">
          ByteHive.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                What We Do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <a className="nav-link text-primary active-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex">
          <a className="nav-link text-primary active-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
