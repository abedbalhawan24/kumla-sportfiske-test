import React from "react";
import "./Rules.css";

// Importera alla bilder från assets/gallery
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/));

function Gallery() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Galleri</h1>
      <h2>Bilder från våra medlemmar</h2>
      <div className="rules-container" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {images.map((img, index) => (
          <div key={index} style={{ flex: "1 0 30%", minWidth: "200px" }}>
            <img 
              src={img} 
              alt={`Galleri ${index + 1}`} 
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
