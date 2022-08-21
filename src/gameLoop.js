import { Player } from "./player.js";

class game {
  constructor() {
    this.p1 = new Player("p1");
    this.cpu = new Player("cpu");
  }
  // helpers
  #gameIsOver = () => {
    return (
      this.p1.board.allSunken() ||
      this.cpu.board.allSunken()
    );
  };

  makeMove = (attacker, target, opponent) => {
    if (
      !opponent.board.totalHits.includes(target) &&
      target >= 0 &&
      target < 100
    ) {
      attacker.attack(opponent, target);
      return true; 
    } else {
      console.log(`player: ${attacker.board.totalHits}\ncpu: ${opponent.board.totalHits}`)
      return false;
    }
  };

  #getRandSpace = () => Math.floor(Math.random() * 100);

  getCpuMove = () => {
    let choice = this.#getRandSpace();
    while (this.p1.board.totalHits.includes(choice)) {
      choice = this.#getRandSpace();
    }
    return choice;
  };

  defaultSetup = () => {
    this.p1.board.placeShip("carrier", "horizontal", 0); //       [0, 1, 2, 3, 4]
    this.p1.board.placeShip("battleship", "vertical", 14); //     [14, 24, 34, 44]
    this.p1.board.placeShip("cruiser", "horizontal", 45); //      [45, 46, 47]
    this.p1.board.placeShip("submarine", "vertical", 9); //       [9, 19, 29]
    this.p1.board.placeShip("destroyer", "horizontal", 90); //    [90, 91, 92]

    this.cpu.board.placeShip("carrier", "vertical", 0); //        [0, 10, 20, 30, 40]
    this.cpu.board.placeShip("battleship", "vertical", 8); //     [8, 18, 28, 38]
    this.cpu.board.placeShip("cruiser", "horizontal", 45); //     [45, 46, 47]
    this.cpu.board.placeShip("submarine", "vertical", 9); //      [9, 19, 29]
    this.cpu.board.placeShip("destroyer", "horizontal", 90); //   [90, 91]
  };
}

export { game };
