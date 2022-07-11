function shipFactory(position) {
  const len = position.length; // currently unused
  let hits = [];
  const isSunk = () => position.every((space) => hits.includes(space));
  const hit = (num) => {
    if (position.includes(num)) hits.push(num);
    return true;
  };
  return { isSunk, hit, hits };
}

export { shipFactory };
