import React from "react";
import "../Layout.css"; // återanvänd Layout.css

const howToJoin = [
  "Här kommer information om hur man blir medlem stå.",
  "Här kommer information om hur man blir medlem stå.",
  "Här kommer information om hur man blir medlem stå.",
  "Här kommer information om hur man blir medlem stå.",
  "Här kommer information om hur man blir medlem stå.",
];

const clubRules = [
  "Här kommer regler för medlemmar stå.",
  "Här kommer regler för medlemmar stå.",
  "Här kommer regler för medlemmar stå.",
  "Här kommer regler för medlemmar stå.",
  "Här kommer regler för medlemmar stå.",
];

const membershipBenefits = [
  "Här kommer förmåner för medlemmar att stå.",
  "Här kommer förmåner för medlemmar att stå.",
  "Här kommer förmåner för medlemmar att stå.",
  "Här kommer förmåner för medlemmar att stå.",
  "Här kommer förmåner för medlemmar att stå.",
];

function ClubRules() {
  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Bli Medlem</h1>
        <div className="inner-card">
          <ul>
            <h2>Hur blir jag medlem?</h2>
            {howToJoin.map((rule, index) => (
              <li key={index} style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "8px" }}>
                {rule}
              </li>
            ))}
          </ul>
          <ul>
            <h2 style={{ marginTop: "20px" }}>Klubbregler</h2>
            {clubRules.map((rule, index) => (
              <li key={index} style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "8px" }}>
                {rule}
              </li>
            ))}
          </ul>

          <ul>
            <h2 style={{ marginTop: "20px" }}>Vad ingår i medlemskapet?</h2>
            {membershipBenefits.map((benefit, index) => (
              <li key={index} style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "8px" }}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClubRules;
