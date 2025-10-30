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

  // Facebook SDK
  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({ xfbml: true, version: "v16.0" });
      };
      ((d, s, id) => {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/sv_SE/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    } else {
      // Tvinga parse direkt när komponenten mountas
      window.FB.XFBML.parse();
    }
  }, [isMobile]); // Lägg till isMobile så att widget parse:as på mobil/desktopen

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

  const renderFacebook = (desktop = true) => (
    <div className={desktop ? "desktop-facebook facebook-card" : "mobile-facebook facebook-card"}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/KumlaSportfiske/"
        data-tabs="timeline"
        data-width={desktop ? "340" : ""}
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );

  return (
    <div className="rules-container">
      <div className="outer-card">
        {isMobile ? (
          <>
            {renderText()}
            {renderFacebook(false)}
          </>
        ) : (
          <div className="inner-card inner-card-desktop">
            <div className="inner-card-content">
              {renderText()}
              {renderFacebook(true)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
