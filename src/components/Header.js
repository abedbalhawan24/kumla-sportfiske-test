import React from "react";
import logo from "../assets/logo.png";
import "../Layout.css";

function Header() {
  return (
    <div className="header" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 20px" }}>
      <img src={logo} alt="Kumla Sportfiske logo" className="logo" />
      <h1 style={{ color: "var(--text-dark)", margin: 0 }}>Kumla Sportfiske</h1>
    </div>
  );
}

export default Header;
