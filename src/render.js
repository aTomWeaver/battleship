function generateBoard(player, parentElm) {
  for (let i = 0; i < 100; i++) {
    const space = document.createElement('div');
    space.classList.add('space');
    space.dataset.index = `${player}-${i}`;
    parentElm.append(space);
  }
}

function renderMain() {
  const pageCtr = document.querySelector(".page-ctr");

  const pageTitle = document.createElement("h1");
  pageTitle.id = "page-title";

  const appCtr = document.createElement("div");
  appCtr.classList.add("app-ctr");

  // CPU ELEMENTS
  const cpuActionDisplay = document.createElement("div");
  cpuActionDisplay.classList.add("cpu-action-display");

  const cpuBoard = document.createElement("div");
  cpuBoard.classList.add("board");
  generateBoard('cpu', cpuBoard);

  const cpuHUD = document.createElement("div");
  cpuHUD.classList.add("hud");

  const cpuTitle = document.createElement("h2");
  cpuTitle.classList.add("player-hud-title");
  cpuTitle.innerText = "CPU";

  const cpuSunkenShips = document.createElement("div");
  cpuSunkenShips.classList.add("sunken-ships");

  // P1 ELEMENTS

  const p1HUD = document.createElement("div");
  p1HUD.classList.add("hud");

  const p1Title = document.createElement("h2");
  p1Title.classList.add("player-hud-title");
  p1Title.innerText = "Player One";

  const p1SunkenShips = document.createElement("div");
  p1SunkenShips.classList.add("sunken-ships");

  const p1Board = document.createElement("div");
  p1Board.classList.add("board");

  const p1ActionDisplay = document.createElement("div");
  p1ActionDisplay.classList.add("p1-action-display");

  cpuHUD.append(cpuTitle, cpuSunkenShips);
  p1HUD.append(p1Title, p1SunkenShips);
  appCtr.append(
    cpuActionDisplay,
    cpuBoard,
    cpuHUD,
    p1HUD,
    p1Board,
    p1ActionDisplay
  );
  pageCtr.append(pageTitle, appCtr);
  document.body.append(pageCtr);
}

export { renderMain };
