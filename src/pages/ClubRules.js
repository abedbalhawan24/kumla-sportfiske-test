import React from "react";
import "./Rules.css"; // återanvänd samma CSS som för sjöregler

const clubRules = [
  "Vi kommer köra vårens arbetshelg sista helgen i april och höstens sista helgen i augusti. Dessa helger kommer bli återkommande även nästa år.",
  "Alla medlemmar kommer kallas till minst 2 arbetsdagar (en under perioden Januari-Juni och en under perioden Juli-December) av styrelsen, där vi tillsammans tar hand om sjöarna och gör de i ordning för säsongen och det är obligatorisk närvaro vid minst 2 tillfällen.",
  "Då vi har en sjö som vi även säljer fiskekort till externa gäster så måste denna sjö vara i fin ordning.",
  "Vi ser gärna att ni som medlem dyker upp på årsmöten och andra möten styrelsen kallar till.",
  "Som medlem har man också rätt att inkomma med förslag kring sjöarna eller klubben till styrelsen."
];

const membershipBenefits = [
  "Medlem måste även ha ett fiskekort, OM man inte fiskar i Hynneberg och Bergabrottet då dessa ingår i medlemskapet.",
  "Egna barn under 15 år får fiska tillsammans med målsman om fisket sker aktivt.",
  "Maka/Make/Sambo/Särbo får även fiska om de är medlemmar.",
  "Fiske i Säbylundssjön samt våra 2 medlemssjöar som innehåller ädelfisk, som medlem gäller totalt 2 fiskar/fisketur och högst 4 fiskar/kalendermånad oavsett sjö och antal som fiskar. Vid fortsatt fiske ska nytt fiskekort lösas, Gästfiskekort eller Dagfiskekort.",
  "En av våra medlemsjöar är exklusiv och information om denna får ni efter löst medlemskap och fiskekort.",
  "Fiske i 2 st bergsbrott, Hynneberg och Bergabrottet. Endast naturligt bestånd, ej ädelfisk.",
  "Medlemmar kan ge förslag på aktiviteter såsom flugfiskekurs, flugbindningskurs, spinnfiskekurs, metkurs eller andra önskemål.",
  "Medlemmar kan även ge förslag på deltagande i fiskeresor, fisktävlingar efter beslut av styrelsen.",
  "Medlemmar kan gå en utbildning för att bli fisketillsyningsman och ska då arbeta aktivt med fisketillsyn."
];

function ClubRules() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginTop: "20px" }}>Bli Medlem</h1>
      <div className="rules-container">
        <h1 style={{ marginTop: "20px" }}>Klubbregler</h1>
        <ul className="rules-list">
          {clubRules.map((rule, index) => (
            <li key={index} className="text-break">{rule}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: "20px" }}>Vad ingår i medlemskapet?</h2>
        <ul className="rules-list">
          {membershipBenefits.map((benefit, index) => (
            <li key={index} className="text-break">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClubRules;
