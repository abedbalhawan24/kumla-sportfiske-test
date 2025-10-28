import React from "react";
import "../Layout.css";
// Importera Font Awesome ikoner
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Kontakta oss</h1>

        <div className="inner-card">
          <p style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "12px" }}>
            Du kan kontakta oss via nedanstående alternativ:
          </p>
          <ul style={{ fontWeight: 600, wordWrap: "break-word", overflowWrap: "break-word", marginBottom: "12px" }}>
            <p style={{ marginBottom: "8px" }}>E-post: <a href="mailto:exempel@kumlasportfiske.se">exempel@kumlasportfiske.se</a></p>
            <p style={{ marginBottom: "8px" }}>Telefon: 012-3456789</p>
            <p style={{ marginBottom: "8px" }}>Adress: Kommer snart, Kumla</p>
            <p style={{ marginBottom: "8px" }}>
              <p>Facebook:<a href="https://www.facebook.com/kumlasportfiske" target="_blank" rel="noopener noreferrer" style={{ marginRight: "16px", fontSize: "24px", color: "#1877F2" }}>
                <FaFacebook />
              </a>
              Instagram:<a href="https://www.instagram.com/kumlasportfiske/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "24px", color: "#C13584" }}>
                <FaInstagram />
              </a></p>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
