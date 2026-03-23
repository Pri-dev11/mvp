import React, {useState} from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Header.css";
import logoUAE from "./../Images/logoUAE.png";

function Header() {
  const location = useLocation();
  const [season, setSeason] = useState("Season");
  const [language, setLanguage] = useState("EN");

  return (
    <header className="header d-flex align-items-center justify-content-between">
      <div className="header-left">
        <img src={logoUAE} alt="UAE Logo" className="header-logo" />
      </div>
      <div className="header-center">
        <Nav className="justify-content-center header-center">
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/home" ? "active" : ""}`} href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">About</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/events" ? "active" : ""}`} href="/events">Events</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/news" ? "active" : ""}`} href="/news">News</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/gallery" ? "active" : ""}`} href="/gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/contact" ? "active" : ""}`} href="/contact">Contact</Nav.Link>
          </Nav.Item>
         <Nav.Item>
            <Nav.Link className={`header-link ${location.pathname === "/faq" ? "active" : ""}`} href="/faq">FAQ</Nav.Link>
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
      </div>
    </header>
  );
}

export default Header;
