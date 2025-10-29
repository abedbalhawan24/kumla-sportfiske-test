import React from "react";
import "../Layout.css";

function Fangstrapport() {
  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Fångstrapporter Säbylundssjön</h1>
        <p>
          Här kan du se medlemmarnas rapporter från Säbylundssjön via Ifiske.
        </p>
        <iframe
          src="https://www.ifiske.se/fisketips-sabylundssjon.htm"
          title="Fångstrapporter Ifiske"
          style={{
            width: "100%",
            height: "800px",
            border: "none",
            borderRadius: "12px",
            minHeight: "500px",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Fangstrapport;
