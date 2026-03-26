import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoUAE from "./../Images/logoUAE.png";
import SocialLinks from "../common/SocialLinks";
import ContactModal from "../contactModal/ContactModal";
import "./Footer.css";

function Footer() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <img src={logoUAE} alt="logoUAE" className="footer-logo" />
          <SocialLinks />
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h4>Events</h4>
            <Link to="/home#events-calendar">Events Calendar</Link>
            <Link to="/news">News</Link>
            <Link to="/events">Upcoming Events</Link>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <Link to="/about">About Us</Link>
            <a>Vision</a>
          </div>
          <div className="footer-column">
            <h4>Help Centers</h4>
            <a href="#" onClick={handleContactClick}>Contact Us</a>
            <Link to="/home#faq">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Privacy Policy . Terms & Conditions</p>
      </div>

      <ContactModal
        show={showContactModal}
        handleClose={() => setShowContactModal(false)}
      />
    </>
  );
}

export default Footer;
