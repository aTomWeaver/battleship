import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
  }
  attack(player, pos) {
    player.board.receiveHit(pos);
  }
}

export { Player };
