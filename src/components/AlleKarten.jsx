import alle_karten_datei from "../data/alle_karten_datei";
import Karte from "./Karte";

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

const AlleKarten = () => {
  return (
    <>
      <div className="container">
        {alle_karten_datei.map((item, index) => {
          item.farbe = farbÜbersetzung(item.farb_nr);

          return <Karte key={index} data={item} />;
        })}
      </div>
      <p className="colour-counter-text">{`${wieVielKarten(alle_karten_datei)}`}</p>
    </>
  );
};

export default AlleKarten;
