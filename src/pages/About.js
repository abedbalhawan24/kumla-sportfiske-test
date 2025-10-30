import React, { useState, useEffect } from "react";
import "../Layout.css";
import aboutText from "../data/kontakt/aboutText.json";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => (
    <>
      {aboutText.paragraphs.map((item, index) => (
        <div key={index} style={{ fontWeight: 600, marginBottom: "16px" }}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );

  return (
    <div className="about-container">
      <div className="outer-card">
        <h1>Om Oss</h1>
        {isMobile ? renderContent() : <div className="inner-card">{renderContent()}</div>}
      </div>
    </div>
  );
}

export default About;
