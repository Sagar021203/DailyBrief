import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
      <ul className="social-icons">
        <li className="facebook-icon">
          <i className="ri-facebook-fill"></i>
          <span>facebook</span>
        </li>
        <li className="instagram-icon">
          <i className="ri-instagram-line"></i>
          <span>Instagram</span>
        </li>
        <li className="twitter-icon">
          <i className="ri-twitter-fill"></i>
          <span>Twitter</span>
        </li>
        <li className="youtube-icon">
          <i className="ri-youtube-fill"></i>
          <span>YouTube</span>
        </li>
      </ul>
      <div className="newsletter-input">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Your Email Address"
          />
          <button className="input-group-text" id="inputGroup-sizing-lg">
            Sign Up
          </button>
        </div>
        <small>Subscribe to email list and stay up-to-date!</small>
          </div>
          <div className="footer_text">© 2024 DailyBrief. All rights reserved. All articles and content are sourced from News API.Views are those of the authors, not DailyBrief.!<br/> © 2024 | DailyBrief™</div>
          </div>
    </div>
  );
}

export default Footer;
