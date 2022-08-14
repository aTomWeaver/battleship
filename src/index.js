import { game } from "./gameLoop.js";
import 'render.js';

const GAME = new game();
const p1 = GAME.p1;
const cpu = GAME.cpu;

GAME.defaultSetup();

const attackBtn = document.getElementById('test-button');
attackBtn.addEventListener('click', () => {
  // check to see if player's choice was valid before proceeding
  if(GAME.makeMove(p1, 2, cpu)) {
    console.log(`cpu hits: ${cpu.board.totalHits}`);
    GAME.update();
    GAME.makeMove(cpu, GAME.getCpuMove(), p1);
    console.log(`p1 hits: ${p1.board.totalHits}`);
    GAME.update();
  };
})

