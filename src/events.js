import { refreshBoard } from "./render";

function bindEvents(game) { // rename to something more specific
  const cpuSpaces = document.querySelectorAll(".cpu-space");
  cpuSpaces.forEach((space) =>
    space.addEventListener("click", () => {
      if (game.makeMove(game.p1, space.dataset.index, game.cpu)) {
        // skips rest if player clicks invalid space
        refreshBoard(game.cpu);
        game.makeMove(game.cpu, game.getCpuMove(), game.p1);
        refreshBoard(game.p1);
        console.log(
          `player: ${game.p1.board.sunkenShips}\ncpu: ${game.cpu.board.sunkenShips}`
        );
      }
    })
  );
}

export { bindEvents };
