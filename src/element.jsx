import electricIcon from "./assets/electric-type.png";
import groundIcon from "./assets/ground-type.png";
import iceIcon from "./assets/ice-type.png";
import waterIcon from "./assets/water-type.png";
import poisonIcon from "./assets/poison-type.png";
import fairyIcon from "./assets/fairy-type.png";

const ICONS = {
  electric: electricIcon,
  ground: groundIcon,
  ice: iceIcon,
  water: waterIcon,
  poison: poisonIcon,
  fairy: fairyIcon,
};

/**
 * @param {Object} param0
 * @param {'electric'|'ground'|'ice'|'water'|'poison'|fairy} param0.type
 */
export function Element({ type }) {
  if (!ICONS[type]) {
    return null;
  }

  return (
    <div
      className="element"
      onClick={() => {
        alert(`${type.toUpperCase()} type`);
      }}
    >
      <img
        className={`icon icon-${type}`}
        src={ICONS[type]}
        alt={`${type} type`}
      />
    </div>
  );
}
