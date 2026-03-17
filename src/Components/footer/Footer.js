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
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="facebook-icon"
                alt="Facebook Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="linkedin-icon"
                alt="LinkedIn Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="twitter-icon"
                alt="Twitter Icon"
                className="social-icon"
              />
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
