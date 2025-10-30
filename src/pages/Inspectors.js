import React, { useState, useEffect } from "react";
import "../Layout.css";
import inspectors from "../data/kontakt/inspectors.json";

function Inspectors() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => (
  <ul className="inspectors-list">
    {inspectors.map(ins => (
      <li key={ins.name} className="inspector-item">
        <strong>{ins.name}</strong> – {ins.lake} – 📞 {ins.phone}
      </li>
    ))}
  </ul>
);


  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Tillsynsmän</h1>
        {isMobile ? renderContent() : <div className="inner-card">{renderContent()}</div>}
      </div>
    </div>
  );
}

export default Inspectors;
