import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
    this.misses = [];
  }
  attack(player, pos) {
    if (pos < 100) {
      player.board.receiveHit(pos);
      if (!player.board.spaces[pos].ship && !this.misses.includes(pos)) {
        this.misses.push(pos);
      }
    } else {
      console.log("invalid");
    }
  }
}

export { Player };
