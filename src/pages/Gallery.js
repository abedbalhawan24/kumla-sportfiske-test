import React, { useState, useEffect } from "react";
import "../Layout.css";

// Importera alla bilder från assets/gallery
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/));

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const renderGallery = () => (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
          <img src={img} alt={`Galleri ${index + 1}`} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="gallery-container">
      <div className="outer-card">
        <h1>Galleri</h1>
        <h2>Bilder från våra medlemmar</h2>

        {isMobile ? renderGallery() : <div className="inner-card">{renderGallery()}</div>}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img className="lightbox-content" src={images[lightboxIndex]} alt={`Galleri ${lightboxIndex + 1}`} />
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
