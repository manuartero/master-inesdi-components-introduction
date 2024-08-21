import electricIcon from "./assets/electric-type.png";
import groundIcon from "./assets/ground-type.png";
import iceIcon from "./assets/ice-type.png";
import waterIcon from "./assets/water-type.png";

import "./app.css";

export function App() {
  return (
    <main>
      <div className="element">
        <img className="icon icon-electric" src={electricIcon} alt="electric type" />
      </div>

      <div className="element">
        <img className="icon icon-ground" src={groundIcon} alt="ground type" />
      </div>

      <div className="element">
        <img className="icon icon-ice" src={iceIcon} alt="ice type" />
      </div>

      <div className="element">
        <img className="icon icon-water" src={waterIcon} alt="water type" />
      </div>
    </main>
  );
}
