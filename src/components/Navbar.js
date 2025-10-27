import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Lägg loggan i src/assets/
import "../Layout.css"; // CSS för navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Kumla Sportfiske" className="logo" />
      </div>

      <div className="navbar-right">
        {/* Startsida */}
        <NavLink to="/" className="navlink">Startsida</NavLink>

        {/* Regler Dropdown */}
        <div className="dropdown">
          <span className="navlink">Regler ▼</span>
          <div className="dropdown-content">
            <NavLink to="/rules?lake=Lugnet">Lugnet</NavLink>
            <NavLink to="/rules?lake=Säbylundssjön">Säbylundssjön</NavLink>
            <NavLink to="/rules?lake=Nolsjön">Nolsjön</NavLink>
            <hr style={{ margin: "5px 0", borderColor: "#0077cc" }} />
            <NavLink to="/clubrules">Klubbregler</NavLink>
          </div>
        </div>

        {/* Kontakt Dropdown */}
        <div className="dropdown">
          <span className="navlink">Kontakt ▼</span>
          <div className="dropdown-content">
            <NavLink to="/contact">Allmän kontakt</NavLink>
            <NavLink to="/inspectors">Tillsynsmän</NavLink>
            <NavLink to="/about">Om oss</NavLink>
          </div>
        </div>

        {/* Övriga länkar */}
        <NavLink to="/news" className="navlink">Nyheter</NavLink>
        <NavLink to="/gallery" className="navlink">Galleri</NavLink>
        <a
          href="https://www.ifiske.se/fiske-sabylundssjon.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="navlink"
        >
          iFiske
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
