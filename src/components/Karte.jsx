
const Karte = ({data}) => {
  const { farb_nr, angriff, verteidigung, name, herkunftsland, farbe } = data;
  return (
    <ul className="karte">
      <li className="karte__element"><span className="karte__element-var">name: </span><span className="karte__element-wert">{name}</span></li>
      <li className="karte__element"><span className="karte__element-var">herkunftsland: </span><span className="karte__element-wert">{herkunftsland}</span></li>
      <li className="karte__element"><span className="karte__element-var">angriff: </span><span className="karte__element-wert">{angriff}</span></li>
      <li className="karte__element"><span className="karte__element-var">verteidigung: </span><span className="karte__element-wert">{verteidigung}</span></li>
      <li className="karte__element"><span className="karte__element-var">farbe: </span><span className="karte__element-wert">{farbe}</span></li>
      <li className="karte__element"><span className="karte__element-var">farb_nr: </span><span className="karte__element-wert">{farb_nr}</span></li>
    </ul>
  )
}

export default Karte