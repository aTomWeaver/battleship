import { game } from "./gameLoop.js";
import {
  renderMain,
  renderPlacedShips,
} from "./render.js";
import { bindEvents } from "./events.js";
import "./style.css";


const GAME = new game();
GAME.defaultSetup();


renderMain();
renderPlacedShips(GAME.p1); //this should be done on a ship-by-ship basis
bindEvents(GAME);

