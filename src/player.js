import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
    this.misses = [];
    this.lastAttackResult;
  }
  attack(opponent, targetSpace) {
    if (targetSpace < 100) {
      opponent.board.receiveHit(targetSpace);
      if (
        !opponent.board.spaces[targetSpace].ship &&
        !this.misses.includes(targetSpace)
      ) {
        this.misses.push(targetSpace);
        this.lastAttackResult = 'MISS';
      } else {
        this.lastAttackResult = 'HIT';
      }
    }
  }
}

export { Player };
