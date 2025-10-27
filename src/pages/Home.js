import React, { useEffect } from "react";
import "./Rules.css";

function Home() {
  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: "v16.0",
        });
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
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kumla Sportfiskeförening</h1>
      <div
        className="rules-container text-break"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {/* Vänster kolumn – text om klubben */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <p>
            Välkomna till Kumla Sportfiskeförening och Säbylundssjön! <br></br> <br></br> 
            Säbylundssjön är en lättillgänglig familjesjö. Spinn, mete, pimpel och flugfiske är tillåtet. Säbylundssjön är ett gammalt sandtag och har mycket bra vattenkvalitet och ett rikt insektsliv. 
          <br></br> <br></br> 
          Som medlem har du ytterligare fiskemöjligheter. <br></br>Där ingår våra två medlemssjöar, en väldigt trevlig skogssjö, Här finns både grillplats, bryggor och vindskydd.<br></br>Samt Lugnet som är en flugfiskesjö med inriktning på catch and release. <br></br>Lugnet är även ett gammalt kalkbrott och kan stundtals ha ett väldigt klart vatten och ett trevligt kantnära fiske att bjuda på. <br></br>Passar såväl nybörjaren som den erfarne flugfiskaren! <br></br><br></br>Du har även 2st stenbrott där det finns gott om abborre. <br></br><br></br>Mer information fås via välkomstmail som skickas ut till nya medlemmar!
          <br></br><br></br>
          Kumla Sportfiskeklubb sätter ut fisk 2-3 gånger om året och mängden som sätts ut bygger på information från besök vid sjön men också på fångstrapporterna från dem som köper fiskekort.
          <br></br><br></br>
          OBS! Under sommaren så besökt sjön frekvent av badare när vädret tillåter. Badgästerna håller sig på ena sidan och det går att hitta andra ytor att fiska från.
          </p>
        </div>

        {/* Höger kolumn – Facebook */}
        <div style={{ flex: "0 0 340px" }}>
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
