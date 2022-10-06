import { refreshBoard, updateActionDisplay } from "./render";

function bindEvents(game) { // rename to something more specific
  const cpuSpaces = document.querySelectorAll(".cpu-space");
  const p1 = game.p1;
  const cpu = game.cpu;

  cpuSpaces.forEach((space) =>
    space.addEventListener("click", () => {

      // player turn then cpu turn
      if (game.makeMove(p1, parseInt(space.dataset.index), cpu)) {
        // returns if player clicks invalid space
        refreshBoard(cpu);
        updateActionDisplay(p1);

        // CPU move
        game.makeMove(cpu, game.getCpuMove(), p1);
        refreshBoard(p1);
        updateActionDisplay(cpu);

        // logs
        console.log('\nP1:')
        console.table(p1.attempts)
        console.log('\nCPU:')
        console.table(cpu.attempts)
      }


    })
  );
}

export { bindEvents };
