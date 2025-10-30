import React, { useState, useEffect } from "react";
import "../Layout.css";

// Importera JSON
import howToJoinText from "../data/regler/howToJoinText.json";
import clubRulesText from "../data/regler/clubRulesText.json";
import membershipBenefitsText from "../data/regler/membershipBenefitsText.json";

function ClubRules() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderText = () => (
    <>
      <ul>
        <h2>Hur blir jag medlem?</h2>
        {howToJoinText.paragraphs.map((p, i) => (
          <li key={i} style={{ fontWeight: 600 }}>{p}</li>
        ))}
      </ul>
      <ul>
        <h2 style={{ marginTop: "20px" }}>Klubbregler</h2>
        {clubRulesText.paragraphs.map((p, i) => (
          <li key={i} style={{ fontWeight: 600 }}>{p}</li>
        ))}
      </ul>
      <ul>
        <h2 style={{ marginTop: "20px" }}>Vad ingår i medlemskapet?</h2>
        {membershipBenefitsText.paragraphs.map((p, i) => (
          <li key={i} style={{ fontWeight: 600 }}>{p}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Bli Medlem</h1>
        {isMobile && renderText()}
        {!isMobile && <div className="inner-card">{renderText()}</div>}
      </div>
    </div>
  );
}

export default ClubRules;
