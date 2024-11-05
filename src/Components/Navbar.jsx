import React from "react";
import logo from "./assests/DB_logo.png";
import "./Navbar.css";

function Navbar({ setCategory }) {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div className="header-nav box-container">
      <div className="logo-section d-flex justify-content-center">
        <div onClick={() => handleCategoryChange("general")} className="logo d-flex">
          <img src={logo} alt="" />
        </div>
        <ul className="social-menu">
          <li className="sprite-facebook"><i className="ri-facebook-fill"></i></li>
          <li className="sprite-instagram"><i className="ri-instagram-line"></i></li>
          <li className="sprite-youtube"><i className="ri-youtube-fill"></i></li>
          <li className="sprite-twitter"><i className="ri-twitter-fill"></i></li>
        </ul>
      </div>
      <div className="nav-section">
        <nav className="navbar navbar-expand-lg p-0 ">
          <div className="container-fluid p-0">
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
            <p className="menu-text-mobile">MENU</p>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("general")} href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("technology")} href="#">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("business")} href="#">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("health")} href="#">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("sports")} href="#">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("science")} href="#">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => handleCategoryChange("entertainment")} href="#">
                    Entertainment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
