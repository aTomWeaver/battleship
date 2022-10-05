import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
    this.lastAttackResult;
    this.attempts = [];
  }
  attack(opponent, targetSpace) {
    opponent.board.receiveHit(targetSpace);
    if (
      !opponent.board.spaces[targetSpace].ship && // opponent doesn't have a ship on targetSpace &&
      !this.attempts
        .filter((att) => att.result === "MISS")
        .find((elm) => elm.space == targetSpace) // attacker has not already missed targetSpace
    ) {
      this.lastAttackResult = "MISS";
    } else {
      this.lastAttackResult = "HIT";
    }
  }
}

export { Player };
