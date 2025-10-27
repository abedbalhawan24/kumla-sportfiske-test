import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Rules.css";

const lakes = [
  {
    key: "Lugnet",
    name: "Lugnet",
    rules: [
      "I Lugnet är det flugfiske och Catch & Release som gäller och man använder en hullingslös enkelkrok.",
      "Fisket får fortsätta så länge man återsätter fisken som är i bra kondition.",
      "Den person som står på fiskekortet har rätten att fiska i den sjö som fiskekortet gäller.",
      "Endast ett fiskeredskap är tillåtet per fiskekort!",
      "Tillåtna fiskemetoder är endast flugfiske med hullinglös enkelkrok. Endast en upphängare är tillåtet och ryckfiske är förbjudet."
    ],
    address: "Kommer snart, Kumla kommun"
  },
  {
    key: "Säbylundssjön",
    name: "Säbylundssjön",
    rules: [
      "Max 2 fiskar per dag",
      "Endast mete tillåtet",
      "Fiskekort krävs för all fisk"
    ],
    address: "Kommer snart, Kumla kommun"
  },
  {
    key: "Nolsjön",
    name: "Nolsjön",
    rules: [
      "Catch & release",
      "Ingen nätfiske",
      "Max 3 fiskar per dag"
    ],
    address: "Kommer snart, Kumla kommun"
  }
];

function Rules() {
  const location = useLocation();
  const [selectedLake, setSelectedLake] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lakeKey = params.get("lake");
    const lake = lakes.find(l => l.key === lakeKey);
    if (lake) setSelectedLake(lake);
  }, [location]);

  return (
    <div className="content-block">
      <h1>{selectedLake ? selectedLake.name : "Regler per sjö"}</h1>

      {!selectedLake && (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          {lakes.map(lake => (
            <button
              key={lake.key}
              onClick={() => setSelectedLake(lake)}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "6px",
                border: "1px solid #0077cc",
                backgroundColor: "#fff",
                color: "#0077cc",
                fontWeight: "bold",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#0077cc";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#0077cc";
              }}
            >
              {lake.name}
            </button>
          ))}
        </div>
      )}

      {selectedLake && (
        <div className="rules-container">
          <h2>{selectedLake.name}</h2>

          <p>Regler:</p>
          <ul className="rules-list">
            {selectedLake.rules.map((rule, index) => (
              <li key={index} className="text-break">{rule}</li>
            ))}
          </ul>

          <p>Adress:</p>
          <p className="address text-break">{selectedLake.address}</p>
        </div>
      )}
    </div>
  );
}

export default Rules;
