import { gameboardFactory } from "./gameboardFactory.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboardFactory();
  }
  attack() {
    return `Hello, I am ${this.name}`;
  }
}

export { Player };
