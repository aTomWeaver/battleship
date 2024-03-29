function _generateBoard(player, parentElm) {
  for (let i = 0; i < 100; i++) {
    const space = document.createElement("div");
    space.classList.add(`${player}-space`);
    space.dataset.index = i;
    parentElm.append(space);
  }
}

function renderMain() {
  const pageCtr = document.querySelector(".page-ctr");

  const pageTitle = document.createElement("h1");
  pageTitle.id = "page-title";
  pageTitle.innerText = "TUSSLEBOAT";

  const appCtr = document.createElement("div");
  appCtr.classList.add("app-ctr");

  // CPU ELEMENTS
  const p1ActionDisplay = document.createElement("div");
  p1ActionDisplay.classList.add("p1-action-display");

  const cpuBoard = document.createElement("div");
  cpuBoard.classList.add("cpu-board");
  _generateBoard("cpu", cpuBoard);

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
  p1Board.classList.add("p1-board");
  _generateBoard("p1", p1Board);

  const cpuActionDisplay = document.createElement("div");
  cpuActionDisplay.classList.add("cpu-action-display");

  // APPEND

  cpuHUD.append(cpuTitle, cpuSunkenShips);
  p1HUD.append(p1Title, p1SunkenShips);
  appCtr.append(
    p1ActionDisplay,
    cpuBoard,
    cpuHUD,
    p1HUD,
    p1Board,
    cpuActionDisplay
  );
  pageCtr.append(pageTitle, appCtr);
  document.body.append(pageCtr);
}

function updateActionDisplay(player) {
  const actionDisplay = document.querySelector(`.${player.name}-action-display`);
  const result = player.lastAttackResult;
  actionDisplay.style.color = 'white';
  if (result === 'HIT') actionDisplay.style.color = 'red';
  actionDisplay.innerText = `${result}!`
  actionDisplay.classList.add('action-display-vis');
  setTimeout(() => actionDisplay.classList.remove('action-display-vis'), 100);
}

function renderPlacedShips(player) {
  const spaces = document.querySelectorAll(".p1-space");
  for (let i = 0; i < player.board.spaces.length; i++) {
    const space = spaces[i];
    if (player.board.spaces[i].ship) space.classList.add("occupied");
  }
}

function refreshBoard(player) {
  const playerSpaces = document.querySelectorAll(`.${player.name}-space`);
  for (let i = 0; i < player.board.spaces.length; i++) {
    const space = playerSpaces[i];
    if (player.board.spaces[i].isHit && player.board.spaces[i].ship) {
      space.classList.add("hit");
    } else if (player.board.spaces[i].isHit) {
      space.classList.add("miss");
    }
  }
}

export { renderMain, refreshBoard, renderPlacedShips, updateActionDisplay };