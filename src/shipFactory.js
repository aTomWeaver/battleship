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

function shipFactory(type) {
  const length = getShipLength(type); // currently unused
  let hits = [];
  const isSunk = () => hits.length === length;
  const hit = () => {
    if (!isSunk()) {
      hits.push(hits.length);
      console.log(hits);
      if (isSunk()) console.log(`You sank my ${type}!`); 
    }
  }
  return { isSunk, hit, hits, length };
}

export { shipFactory };

// const isSunk = () => position.every((space) => hits.includes(space));
