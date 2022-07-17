import { shipFactory } from "./shipFactory.js";

function gameboardFactory() {
  let _generateBlankBoard = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) arr.push({ ship: null, isHit: false });
    return arr;
  };

  let ships = {};

  let board = _generateBlankBoard();

  const _placementIsViable = (length, direction, origin) => {
    if (direction === "horizontal") {
      if (origin < 10 && origin + (length -1) < 10) {
        return true;
      } else if (origin > 10) {
        let start = origin.toString().split("");
        let end = (length - 1) + origin;
        end = end.toString().split("")
        if (start[0] === end[0]) return true;
      }
    } else if (direction === "vertical") {
      if (origin + (length - 1) * 10 < 100) return true;
    }
    return false;
  };

  const placeShip = (type, direction, origin) => {
    const newShip = shipFactory(type);
    ships[type] = newShip; // appends new ship to ships object
    if (direction === "vertical" && origin + newShip.length) {
      for (let i = 0; i <= newShip.length * 10; i += 10) {
        board[origin + i].ship = type;
      }
    } else {
      for (let i = 0; i < newShip.length; i++) {
        board[origin + i].ship = type;
      }
    }
  };

  let receiveHit = (x) => {
    let pos = board[x];
    if (!pos.isHit && pos.ship) {
      pos.isHit = true;
      ships[pos.ship].hit();
    } else {
      return;
    }
  };

  return { board, receiveHit, placeShip, ships };
}

export { gameboardFactory };
