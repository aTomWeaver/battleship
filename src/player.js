import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
    this.misses = [];
  }
  attack(player, pos) {
    player.board.receiveHit(pos);
    if (!player.board.spaces[pos].ship && !this.misses.includes(pos)) {
      this.misses.push(pos);
    }
  }
}

export { Player };
