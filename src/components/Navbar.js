import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Layout.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    regler: false,
    kontakt: false,
  });

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (menu) =>
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen({ regler: false, kontakt: false });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Kumla Sportfiske" className="logo" />
      </div>

      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>

      <div className={`navbar-right ${mobileMenuOpen ? "active" : ""}`}>
        {/* Startsida */}
        <NavLink to="/" className="navlink" onClick={closeMobileMenu}>
          Startsida
        </NavLink>
        

        {/* Regler Dropdown */}
        <div
          className="dropdown"
          onClick={() => toggleDropdown("regler")}
          onMouseEnter={() => window.innerWidth > 768 && toggleDropdown("regler")}
          onMouseLeave={() => window.innerWidth > 768 && toggleDropdown("regler")}
        >
          <span className="navlink">Våra sjöar ▼</span>
          <div
            className={`dropdown-content ${
              mobileDropdownOpen.regler ? "active" : ""
            }`}
          >
            <NavLink to="/rules?lake=Lugnet" onClick={closeMobileMenu}>
              Lugnet
            </NavLink>
            <NavLink to="/rules?lake=Säbylundssjön" onClick={closeMobileMenu}>
              Säbylundssjön
            </NavLink>
            <NavLink to="/rules?lake=Nolsjön" onClick={closeMobileMenu}>
              Nolsjön
            </NavLink>
            <hr />
          </div>
        </div>

        {/* Övriga länkar */}
        <NavLink to="/clubrules" className="navlink" onClick={closeMobileMenu}>
          Bli medlem
        </NavLink>
        <NavLink to="/news" className="navlink" onClick={closeMobileMenu}>
          Nyheter
        </NavLink>
        <NavLink to="/gallery" className="navlink" onClick={closeMobileMenu}>
          Galleri
        </NavLink>
        <a
          href="https://www.ifiske.se/fiske-sabylundssjon.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="navlink"
        >
          iFiske
        </a>
        {/* Kontakt Dropdown */}
        <div
          className="dropdown"
          onClick={() => toggleDropdown("kontakt")}
          onMouseEnter={() => window.innerWidth > 768 && toggleDropdown("kontakt")}
          onMouseLeave={() => window.innerWidth > 768 && toggleDropdown("kontakt")}
        >
          <span className="navlink">Kontakt ▼</span>
          <div
            className={`dropdown-content ${
              mobileDropdownOpen.kontakt ? "active" : ""
            }`}
          >
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Allmän kontakt
            </NavLink>
            <NavLink to="/inspectors" onClick={closeMobileMenu}>
              Tillsynsmän
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>
              Om oss
            </NavLink>
            <hr></ hr>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
