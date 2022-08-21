import { game } from "./gameLoop.js";
import {
  renderMain,
  renderAttack,
  renderPlacedShips,
} from "./render.js";
import { bindEvents } from "./events.js";
import "./style.css";

const GAME = new game();
const p1 = GAME.p1;
const cpu = GAME.cpu;
GAME.defaultSetup();

const update = () => {
  // render.refresh()
  GAME.switchTurns();
};

renderMain();


bindEvents(GAME);
renderPlacedShips(p1);

