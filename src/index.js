import { game } from "./gameLoop.js";

const GAME = new game();
GAME.defaultSetup();
GAME.playerMakeMove(GAME.p1, 0, GAME.cpu);
GAME.cpuMakeMove();

console.log(GAME.cpu.board.spaces) 