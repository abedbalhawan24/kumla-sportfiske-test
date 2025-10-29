import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Layout.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    regler: false,
    kontakt: false,
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (menu) =>
    setMobileDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen({ regler: false, kontakt: false });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Kumla Sportfiske" className="logo" />
      </div>

      <button className="hamburger" onClick={toggleMobileMenu}>☰</button>

      <div className={`navbar-right ${mobileMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="navlink" onClick={closeMobileMenu}>Startsida</NavLink>

        <div
          className="dropdown"
          onClick={() => toggleDropdown("regler")}
          onMouseEnter={() => window.innerWidth > 768 && toggleDropdown("regler")}
          onMouseLeave={() => window.innerWidth > 768 && toggleDropdown("regler")}
        >
          <span className="navlink">Våra sjöar ▼</span>
          <div className={`dropdown-content ${mobileDropdownOpen.regler ? "active" : ""}`}>
            <NavLink to="/rules?lake=Lugnet" onClick={closeMobileMenu}>Lugnet</NavLink>
            <NavLink to="/rules?lake=Säbylundssjön" onClick={closeMobileMenu}>Säbylundssjön</NavLink>
            <NavLink to="/rules?lake=Nolsjön" onClick={closeMobileMenu}>Nolsjön</NavLink>
            <hr />
            <NavLink to="/Fangstrapport" onClick={closeMobileMenu}>Fångstrapporter</NavLink>
          </div>
        </div>
        
        <div
          className="dropdown"
          onClick={() => toggleDropdown("Nyheter")}
          onMouseEnter={() => window.innerWidth > 768 && toggleDropdown("Nyheter")}
          onMouseLeave={() => window.innerWidth > 768 && toggleDropdown("Nyheter")}
        >
          <span className="navlink">Nyheter ▼</span>
          <div className={`dropdown-content ${mobileDropdownOpen.kontakt ? "active" : ""}`}>
            <NavLink to="/news" onClick={closeMobileMenu}>Nyheter</NavLink>
            <NavLink to="/events" onClick={closeMobileMenu}>Evenemang</NavLink>
            <hr />
          </div>
        </div>

        <NavLink to="/clubrules" className="navlink" onClick={closeMobileMenu}>Bli medlem</NavLink>
        <NavLink to="/news" className="navlink" onClick={closeMobileMenu}>Nyheter</NavLink>
        <NavLink to="/gallery" className="navlink" onClick={closeMobileMenu}>Galleri</NavLink>
        <a href="https://www.ifiske.se/fiske-sabylundssjon.htm" target="_blank" rel="noopener noreferrer" className="navlink">iFiske</a>

        <div
          className="dropdown"
          onClick={() => toggleDropdown("kontakt")}
          onMouseEnter={() => window.innerWidth > 768 && toggleDropdown("kontakt")}
          onMouseLeave={() => window.innerWidth > 768 && toggleDropdown("kontakt")}
        >
          <span className="navlink">Kontakt ▼</span>
          <div className={`dropdown-content ${mobileDropdownOpen.kontakt ? "active" : ""}`}>
            <NavLink to="/contact" onClick={closeMobileMenu}>Allmän kontakt</NavLink>
            <NavLink to="/inspectors" onClick={closeMobileMenu}>Tillsynsmän</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>Om oss</NavLink>
            <hr />
          </div>
        </div>

        {/* Dark/Light mode slider */}
        <div className={`theme-toggle ${darkMode ? "dark" : ""}`} onClick={() => setDarkMode(!darkMode)}>
          <span>☀️</span>  {/* Light mode till vänster */}
          <div className="slider-container">
            <div className="slider"></div>
          </div>
          <span>🌙</span>  {/* Dark mode till höger */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
