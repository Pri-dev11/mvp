import React from "react";
import "./Header.css";
import logoUAE from "./../Images/logoUAE.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoUAE} alt="UAE Logo" className="header-logo" />
      </div>
      <div className="header-center">
        <nav className="header-nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/news">News</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
      <div className="header-right">
        <span className="live-indicator">
          Live now <span className="red-dot"></span>
        </span>
        <select className="dropdown">
          <option>Season</option>
          <option>2025</option>
          <option>2026</option>
        </select>
        <select className="dropdown">
          <option>Language</option>
          <option>English</option>
          <option>Arabic</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
