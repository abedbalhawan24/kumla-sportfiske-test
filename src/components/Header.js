import React from "react";
import logo from "../assets/logo.png"; // lägg loggan i src/assets/

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kumla Sportfiske logo" />
      <h1>Kumla Sportfiske</h1>
    </div>
  );
}

export default Header;
