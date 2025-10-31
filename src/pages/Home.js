import React, { useEffect, useState } from "react";
import "../Layout.css";
import homeText from "../data/homeText.json";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Lyssna på fönsterändringar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Render text ---
  const renderText = () => (
    <div className="home-text">
      <h1>Kumla Sportfiskeförening</h1>
      <h2>{homeText.title}</h2>
      {homeText.paragraphs.map((p, i) => (
        <p key={i}>
          <strong>{p}</strong>
        </p>
      ))}
    </div>
  );

  // --- Render Facebook iframe ---
  const renderFacebookIframe = (desktop = true) => {
    const width = desktop ? 340 : 300;
    const height = 500;
    const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
      "https://www.facebook.com/KumlaSportfiske/"
    )}&tabs=timeline&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

    return (
      <div className={desktop ? "desktop-facebook facebook-card" : "mobile-facebook facebook-card"}>
        <iframe
          title="Kumla Sportfiske Facebook"
          src={src}
          width={width}
          height={height}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    );
  };

  return (
    <div className="rules-container">
      <div className="outer-card">
        {isMobile ? (
          <>
            {renderText()}
            {renderFacebookIframe(false)}
          </>
        ) : (
          <div className="inner-card inner-card-desktop">
            <div className="inner-card-content">
              {renderText()}
              {renderFacebookIframe(true)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
