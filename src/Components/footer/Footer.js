import React, { useState } from "react";
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
            <a href="/events-calendar">Events Calendar</a>
            <a href="/news">News</a>
            <a href="/upcoming-events">Upcoming Events</a>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <a>About Us</a>
            <a>Vision</a>
          </div>
          <div className="footer-column">
            <h4>Help Centers</h4>
            <a href="#" onClick={handleContactClick}>Contact Us</a>
            <a>FAQ</a>
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
