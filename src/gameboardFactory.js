import { shipFactory } from "./shipFactory.js";

function gameboardFactory() {
  let _generateBlankBoard = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) arr.push({ ship: null, isHit: false });
    return arr;
  };

  let board = _generateBlankBoard();

  let ships = {};

  let sunkenShips = [];

  const allSunken = () => {
    if (Object.keys(ships).length === sunkenShips.length) {
      return true;
    }
  };

  const _getShipCoords = (length, direction, origin) => {
    let pos = [];
    if (direction === "vertical") {
      for (let i = 0; i < length * 10; i += 10) {
        pos.push(origin + i);
      }
    } else if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        pos.push(origin + i);
      }
    }
    return pos;
  };

  const _placementDoesNotOverhang = (coords, direction) => {
    let first = coords[0];
    let last = coords.slice(-1)[0];
    if (direction === "horizontal") {
      if (first < 10 && last < 10) {
        return true;
      } else if (first > 10) {
        let firstTensPlace = first.toString().split("")[0];
        let lastTensPlace = last.toString().split("")[0];
        if (firstTensPlace === lastTensPlace) return true;
      }
    } else if (direction === "vertical") {
      if (last < 100) return true;
    }
    return false;
  };

  const _placementDoesNotIntersect = (coords) => {
    // checks the board's "ship" property for each coordinate
    return !coords.some((pos) => board[pos].ship);
  };

  const placeShip = (type, direction, origin) => {
    const newShip = shipFactory(type);
    const coords = _getShipCoords(newShip.length, direction, origin);
    if (
      _placementDoesNotOverhang(coords, direction) &&
      _placementDoesNotIntersect(coords) &&
      !ships[type] // has not already placed this kind of ship
    ) {
      coords.forEach((pos) => (board[pos].ship = type));
      ships[type] = newShip;
    }
  };

  let receiveHit = (x) => {
    let pos = board[x];
    if (!pos.isHit && pos.ship) {
      pos.isHit = true;
      ships[pos.ship].hit();
      if (ships[pos.ship].isSunk()) sunkenShips.push(pos.ship);
      // check if ship has sunk; if true, push the ship to sunkenShips
      if (allSunken()) console.log("All ships have sunk!");
    } else {
      return;
    }
  };

  return { board, ships, sunkenShips, receiveHit, placeShip };
}

export { gameboardFactory };
