import { game } from "./gameLoop.js";
import { renderMain, renderAttack, refreshBoard, renderPlacedShips } from "./render.js";
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

function bindEvents() {
  const cpuSpaces = document.querySelectorAll(".cpu-space");
  cpuSpaces.forEach((space) =>
    space.addEventListener("click", () => {
      if (GAME.makeMove(p1, space.dataset.index, cpu)) {
        refreshBoard(cpu);
        GAME.makeMove(cpu, GAME.getCpuMove(), p1);
        refreshBoard(p1);
        console.log(`player: ${GAME.p1.board.sunkenShips}\ncpu: ${GAME.cpu.board.sunkenShips}`)
      };
    })
  );
}
bindEvents();
renderPlacedShips(p1);

renderAttack("hit", 6);

// const attackBtn = document.getElementById('test-button');
// attackBtn.addEventListener('click', () => {
//   // check to see if player's choice was valid before proceeding
//   if(GAME.makeMove(p1, 2, cpu)) {
//     console.log(`cpu hits: ${cpu.board.totalHits}`);
//     GAME.update();
//     GAME.makeMove(cpu, GAME.getCpuMove(), p1);
//     console.log(`p1 hits: ${p1.board.totalHits}`);
//     GAME.update();
//   };
// })
