
const Karte = ({data}) => {
  const { farb_nr, angriff, verteidigung, name, herkunftsland, farbe } = data;
  return (
    <div className="karte">
      <span className="karte__item">name: <b>{name}</b></span>
      <span className="karte__item">herkunftsland: <b>{herkunftsland}</b></span>
      <span className="karte__item">angriff: <b>{angriff}</b></span>
      <span className="karte__item">verteidigung: <b>{verteidigung}</b></span>
      <span className="karte__item">farbe: <b>{farbe}</b></span>
      <span className="karte__item">farb_nr: <b>{farb_nr}</b></span>
    </div>
  )
}

export default Karte