import React from "react";
import "./Rules.css";

function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Kontakt</h1>
      <div className="rules-container text-break">
        <h2>Allmän kontakt</h2>
        <form>
          <input
            type="text"
            placeholder="Ditt namn"
            style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
          />
          <input
            type="email"
            placeholder="Din e-post"
            style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
          />
          <textarea
            placeholder="Meddelande"
            style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%", minHeight: "100px" }}
          />
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Skicka</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
