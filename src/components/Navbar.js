import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Layout.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    regler: false,
    kontakt: false,
    Nyheter: false,
  });
  const [darkMode, setDarkMode] = useState(false);
  const hoverTimeouts = useRef({});

  // Aktivera darkmode på body
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  // Stäng dropdown när man klickar utanför (mobil)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 1024) {
        const dropdowns = document.querySelectorAll(".dropdown");
        let clickedInsideDropdown = false;
        dropdowns.forEach((d) => {
          if (d.contains(e.target)) clickedInsideDropdown = true;
        });
        if (!clickedInsideDropdown) {
          setMobileDropdownOpen({ regler: false, kontakt: false, Nyheter: false });
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 1024) {
      setMobileDropdownOpen((prev) => ({
        regler: false,
        kontakt: false,
        Nyheter: false,
        [menu]: !prev[menu],
      }));
    }
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 1024) {
      clearTimeout(hoverTimeouts.current[menu]);
      setMobileDropdownOpen((prev) => ({ ...prev, [menu]: true }));
    }
  };

  const handleMouseLeave = (menu) => {
    if (window.innerWidth > 1024) {
      hoverTimeouts.current[menu] = setTimeout(() => {
        setMobileDropdownOpen((prev) => ({ ...prev, [menu]: false }));
      }, 200);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen({ regler: false, kontakt: false, Nyheter: false });
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
        <NavLink to="/" className="navlink" onClick={closeMobileMenu}>
          Startsida
        </NavLink>

        {/* --- Våra sjöar --- */}
        <div
          className="dropdown"
          onClick={() => toggleDropdown("regler")}
          onMouseEnter={() => handleMouseEnter("regler")}
          onMouseLeave={() => handleMouseLeave("regler")}
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
            <NavLink to="/Fangstrapport" onClick={closeMobileMenu}>
              Fångstrapporter
            </NavLink>
          </div>
        </div>

        {/* --- Nyheter --- */}
        <div
          className="dropdown"
          onClick={() => toggleDropdown("Nyheter")}
          onMouseEnter={() => handleMouseEnter("Nyheter")}
          onMouseLeave={() => handleMouseLeave("Nyheter")}
        >
          <span className="navlink">Nyheter ▼</span>
          <div
            className={`dropdown-content ${
              mobileDropdownOpen.Nyheter ? "active" : ""
            }`}
          >
            <NavLink to="/news" onClick={closeMobileMenu}>
              Nyheter
            </NavLink>
            <NavLink to="/events" onClick={closeMobileMenu}>
              Evenemang
            </NavLink>
            <hr />
          </div>
        </div>

        <NavLink to="/clubrules" className="navlink" onClick={closeMobileMenu}>
          Bli medlem
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

        {/* --- Kontakt --- */}
        <div
          className="dropdown"
          onClick={() => toggleDropdown("kontakt")}
          onMouseEnter={() => handleMouseEnter("kontakt")}
          onMouseLeave={() => handleMouseLeave("kontakt")}
        >
          <span className="navlink">Kontakt ▼</span>
          <div
            className={`dropdown-content ${
              mobileDropdownOpen.kontakt ? "active" : ""
            }`}
          >
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Kontakta oss
            </NavLink>
            <NavLink to="/inspectors" onClick={closeMobileMenu}>
              Tillsynsmän
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>
              Om oss
            </NavLink>
            <hr />
          </div>
        </div>

        {/* --- Dark/Light Mode Toggle --- */}
        <div
          className={`theme-toggle ${darkMode ? "dark" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <span>☀️</span>
          <div className="slider-container">
            <div className="slider"></div>
          </div>
          <span>🌙</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
