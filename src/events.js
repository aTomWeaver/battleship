import { refreshBoard, updateActionDisplay } from "./render";
import getCpuMove from "./cpuAI";

function bindEvents(game) { // rename to something more specific
  const cpuSpaces = document.querySelectorAll(".cpu-space");
  const p1 = game.p1;
  const cpu = game.cpu;

  cpuSpaces.forEach((space) =>
    space.addEventListener("click", () => {

      // player turn then cpu turn
      if (game.makeMove(p1, space.dataset.index, cpu)) {
        // returns if player clicks invalid space
        refreshBoard(cpu);
        updateActionDisplay(p1);
        setTimeout(() => {
          game.makeMove(cpu, getCpuMove(game.cpu), p1);
          refreshBoard(p1);
          updateActionDisplay(cpu);
        }, 100);

      }


    })
  );
}

export { bindEvents };
