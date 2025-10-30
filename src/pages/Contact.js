import React, { useState, useEffect } from "react";
import "../Layout.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import contactText from "../data/kontakt/contactText.json";

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => (
    <>
      <p style={{ fontWeight: 600, marginBottom: "12px" }}>{contactText.paragraph}</p>
      <ul style={{ fontWeight: 600, marginBottom: "12px" }}>
        <p style={{ marginBottom: "8px" }}>E-post: <a href={`mailto:${contactText.email}`}>{contactText.email}</a></p>
        <p style={{ marginBottom: "8px" }}>Telefon: {contactText.phone}</p>
        <p style={{ marginBottom: "8px" }}>Adress: {contactText.address}</p>
        <p style={{ marginBottom: "8px" }}>
          Facebook: <a href={contactText.social.facebook} target="_blank" rel="noopener noreferrer" style={{ marginRight: "16px", fontSize: "24px", color: "#1877F2" }}><FaFacebook /></a>
          Instagram: <a href={contactText.social.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: "24px", color: "#C13584" }}><FaInstagram /></a>
        </p>
      </ul>
    </>
  );

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Kontakta oss</h1>
        {isMobile ? renderContent() : <div className="inner-card">{renderContent()}</div>}
      </div>
    </div>
  );
}

export default Contact;
