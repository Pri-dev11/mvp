import React, { useState, useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Header.css";
import logoUAE from "./../Images/logoUAE.png";

function Header() {
  const location = useLocation();
  const [season, setSeason] = useState("Season");
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header d-flex align-items-center justify-content-between ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logoUAE} alt="UAE Logo" className="header-logo" />
      </div>

      <div className={`header-center ${menuOpen ? "open" : ""}`}>
        <Nav className="justify-content-center header-nav-links">
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/home" ? "active" : ""}`} href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname.startsWith("/news") ? "active" : ""}`} href="/news">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/gallery" ? "active" : ""}`} href="/gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link  ${location.pathname === "/events" || location.pathname === "/raceDetail" ? "active" : ""}`} href="/events">Events & Races</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/ticket" ? "active" : ""}`} href="/ticket">Tickets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/horsesAndPeople" ? "active" : ""}`} href="/horsesAndPeople">Horses & People</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="header-right">
        <span className="live-indicator">
          Live now <span className="red-dot"></span>
        </span>
        <NavDropdown
          id="nav-dropdown-season"
          title={season}
          menuVariant="light"
        >
          <NavDropdown.Item onClick={() => setSeason("2026")}>2026</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setSeason("2025")}>2025</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setSeason("2024")}>2024</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title={language} id="nav-dropdown-lang" className="lang-circle">
          <NavDropdown.Item onClick={() => setLanguage("EN")}>English (EN)</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setLanguage("ES")}>Spanish (ES)</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setLanguage("FR")}>French (FR)</NavDropdown.Item>
        </NavDropdown>

        <button className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
