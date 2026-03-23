import React from "react";
import "./Footer.css";
import logoUAE from "./../Images/logoUAE.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <img src={logoUAE} alt="logoUAE" className="footer-logo" />
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
                {/* <i className="fa-brands fa-x-twitter"></i> */}
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <i className="fa-solid fa-music"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h4>Events</h4>
            <a href="/events-calendar">Events Calendar</a>
            <a href="/news">News</a>
            <a href="/upcoming-events">Upcoming Events</a>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <a href="/about-us">About Us</a>
            <a href="/vision">Vision</a>
          </div>
          <div className="footer-column">
            <h4>Help Centers</h4>
            <a href="/contact-us">Contact Us</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Privacy Policy . Terms & Conditions</p>
      </div>
    </>
  );
}

export default Footer;
