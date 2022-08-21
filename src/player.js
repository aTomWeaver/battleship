import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
    this.misses = [];
  }
  attack(opponent, targetSpace) {
    if (targetSpace < 100) {
      opponent.board.receiveHit(targetSpace);
      if (
        !opponent.board.spaces[targetSpace].ship &&
        !this.misses.includes(targetSpace)
      ) {
        this.misses.push(targetSpace);
      }
    }
  }
}

export { Player };
