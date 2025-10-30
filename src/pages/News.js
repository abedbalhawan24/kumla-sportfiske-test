import React, { useState, useEffect } from "react";
import "../Layout.css";
import newsText from "../data/nyheter/newsText.json";

function News() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => (
    <>
      {newsText.paragraphs.map((newsItem, index) => (
        <div key={index} style={{ fontWeight: 600, marginBottom: "16px" }}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.body}</p>
        </div>
      ))}
    </>
  );

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Nyheter</h1>
        {isMobile ? renderContent() : <div className="inner-card">{renderContent()}</div>}
      </div>
    </div>
  );
}

export default News;
