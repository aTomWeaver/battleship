function getShipLength(type) {
  switch (type) {
    case "carrier":
      return 5;
    case "battleship":
      return 4;
    case "cruiser":
      return 3;
    case "submarine":
      return 3;
    case "destroyer":
      return 2;
  }
}

function shipFactory(type, position) {
  const length = getShipLength(type); // currently unused
  let hits = [];
  const isSunk = () => position.every((space) => hits.includes(space));
  const tryHit = (num) => {
    if (position.includes(num) && !hits.includes(num)) {
      hits.push(num);
      return true;
    }
    return false;
  };
  return { isSunk, tryHit, hits, length };
}

export { shipFactory };
