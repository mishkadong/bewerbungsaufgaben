import alle_karten_daten from "../data/alle_karten_daten";
import Karte from "./Karte";

//Aufgabe 1
function farbÜbersetzung(farb_nr) {
  const farben = {
    1: "Grün",
    2: "Rot",
    3: "Weiß",
    4: "Schwarz",
    5: "Blau",
  };
  return farben[farb_nr] || "unbekannte Farbe";
}

//Aufgabe 2
function wieVielKarten(arr) {
  let farbZähler = {
    grünKarten: 0,
    rotKarten: 0,
    weißKarten: 0,
    schwarzKarten: 0,
    blauKarten: 0,
  };
  for (let karte of arr) {
    switch (karte.farbe) {
      case "Grün":
        farbZähler.grünKarten++;
        break;
      case "Rot":
        farbZähler.rotKarten++;
        break;
      case "Weiß":
        farbZähler.weißKarten++;
        break;
      case "Schwarz":
        farbZähler.schwarzKarten++;
        break;
      case "Blau":
        farbZähler.blauKarten++;
        break;
      default:
        break;
    }
  }
  return `Grüne Karten: ${farbZähler.grünKarten}, rote Karten: ${farbZähler.rotKarten}, weiße Karten: ${farbZähler.weißKarten}, schwarze Karten: ${farbZähler.schwarzKarten}, blaue Karten: ${farbZähler.blauKarten}`;
}

//Aufgabe 3
const AlleKarten = () => {
  return (
    <>
      <div className="container">
        {alle_karten_daten.map((element, index) => {
          element.farbe = farbÜbersetzung(element.farb_nr);
          console.log(index)
          return <Karte key={index} data={element} />;
        })}
      </div>
      <p className="farbzähler-text">{`${wieVielKarten(alle_karten_daten)}`}</p>
    </>
  );
};

export default AlleKarten;
