import React from "react";
import "./Rules.css";

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Om oss</h1>
      <div className="rules-container text-break">
        <p>
          Kumla Sportfiske är en organisation som arbetar för ett bättre och mer hållbart sportfiske inom Kumla kommun. 
          <br /><br />
          Vår vision är att alla ska ha möjligheten att fiska men samtidigt kunna lära sig att bibehålla en hög respekt för vår miljö, fiskar och våra vatten. Vi har för närvarande två sjöar tillgängliga att fiska i med fiskekort och en egen medlemssjö som vi nyttjar själva som medlemmar.
        </p>
      </div>
    </div>
  );
}

export default About;
