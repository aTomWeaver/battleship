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
  const cpuActionDisplay = document.createElement("div");
  cpuActionDisplay.classList.add("cpu-action-display");

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

  const p1ActionDisplay = document.createElement("div");
  p1ActionDisplay.classList.add("p1-action-display");

  // APPEND
  
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

function renderAttack(result) {
  const p1ActionDisplay = document.querySelector('.p1-action-display');
  const cpuActionDisplay = document.querySelector('.cpu-action-display');
  const fireMsg = document.createElement('h3');
  fireMsg.classList.add('fire-msg')
  const resultMsg = document.createElement('h3');
  resultMsg.classList.add('fire-msg')

  fireMsg.innerText = 'FIRE!';
  resultMsg.innerText = `${result.toUpperCase()}!`

  p1ActionDisplay.appendChild(fireMsg);

  setTimeout(() => {
    cpuActionDisplay.appendChild(resultMsg);
  },500)
  setTimeout(() => {
    p1ActionDisplay.removeChild(fireMsg);
    cpuActionDisplay.removeChild(resultMsg)
  },1000)
}

function refreshBoard(player) {
  const playerSpaces = document.querySelectorAll(`.${player.name}-space`);
  for (let i = 0; i < player.board.spaces.length; i++) {
    const space = playerSpaces[i];
    if (player.board.spaces[i].isHit && player.board.spaces[i].ship) {
      space.classList.add('hit');
    } else if (player.board.spaces[i].isHit) {
      space.classList.add('miss');
    }
  }
}

export { renderMain, refreshBoard,  renderAttack };
