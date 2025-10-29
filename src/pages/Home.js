import React, { useEffect } from "react";
import "../Layout.css";

function Home() {
  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({ xfbml: true, version: "v16.0" });
      };

      ((d, s, id) => {
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/sv_SE/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Kumla Sportfiskeförening</h1>

        <div className="inner-card inner-card-content">
          {/* Text */}
          <div className="home-text">
            <h2>Välkommen!</h2>
            <p>
              Kumla Sportfiskeförening och Säbylundssjön. <br /><br />
              Säbylundssjön är en lättillgänglig familjesjö. Spinn, mete, pimpel och flugfiske är tillåtet. Säbylundssjön är ett gammalt sandtag och har mycket bra vattenkvalitet och ett rikt insektsliv. <br /><br />
              Som medlem har du ytterligare fiskemöjligheter. Där ingår våra två medlemssjöar, en väldigt trevlig skogssjö. Här finns både grillplats, bryggor och vindskydd.<br />
              Samt Lugnet som är en flugfiskesjö med inriktning på catch and release. Lugnet är även ett gammalt kalkbrott och kan stundtals ha ett väldigt klart vatten och ett trevligt kantnära fiske att bjuda på. Passar såväl nybörjaren som den erfarne flugfiskaren! <br /><br />
              Du har även 2st stenbrott där det finns gott om abborre. <br /><br />
              Mer information fås via välkomstmail som skickas ut till nya medlemmar!<br /><br />
              Kumla Sportfiskeklubb sätter ut fisk 2-3 gånger om året och mängden som sätts ut bygger på information från besök vid sjön men också på fångstrapporterna från dem som köper fiskekort.<br /><br />
              OBS! Under sommaren så besökt sjön frekvent av badare när vädret tillåter. Badgästerna håller sig på ena sidan och det går att hitta andra ytor att fiska från.
            </p>
          </div>

          {/* Desktop Facebook-widget */}
          <div className="desktop-facebook facebook-card">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/KumlaSportfiske/"
              data-tabs="timeline"
              data-width="340"
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </div>
        </div>

        {/* Mobil Facebook-widget */}
        <div className="mobile-facebook facebook-card">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/KumlaSportfiske/"
            data-tabs="timeline"
            data-width="340"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
