import React from "react";
import "../Layout.css";

const inspectors = [
  { name: "John Doe", lake: "Lugnet", phone: "070-123 45 67" },
  { name: "Jane Doe", lake: "Säbylundssjön", phone: "070-987 65 43" },
  { name: "Abed Balhawan", lake: "Nolsjön", phone: "070-xxx xx xx" }
];

function Inspectors() {
  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Tillsynsmän</h1>
        <div className="inner-card">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {inspectors.map(ins => (
            <li
              key={ins.name}
              style={{
                backgroundColor: "#f0f8ff",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc"
              }}
            >
              <strong>{ins.name}</strong> – {ins.lake} – 📞 {ins.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Inspectors;
