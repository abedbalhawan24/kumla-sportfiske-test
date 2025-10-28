import React from "react";
import "../Layout.css";

function News() {
  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Nyheter</h1>

        <div className="inner-card">
          <h2 style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "8px" }}>Senaste uppdateringar och meddelanden från klubben.</h2>
          <ul style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "8px" }}>
            <li>Här kommer uppdateringar/event/nyheter finnas</li>
            <li>Här kommer uppdateringar/event/nyheter finnas</li>
            <li>Här kommer uppdateringar/event/nyheter finnas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
