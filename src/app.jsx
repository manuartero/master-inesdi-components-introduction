import { Element } from "./element";

import "./app.css";

const PKMN_TYPES = ["electric", "ground", "ice", "water", "poison", "fairy"];

export function App() {
  return (
    <main>
      {PKMN_TYPES.map((type) => (
        <Element key={type} type={type} />
      ))}
    </main>
  );
}
