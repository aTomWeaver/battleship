import { targetShip } from "./cpuAI.js";
import { Player } from "./player.js";

class game {
  constructor() {
    this.p1 = new Player("p1");
    this.cpu = new Player("cpu");
    this.cpu.currentTargetShip = "none";
    /*
    // when cpu gets two successful hits in a row, ^ this value will become a new targetShip
    // from the targetShip class in cpuAI.js
    */
  }
  // helpers
  #gameIsOver = () => {
    return this.p1.board.allSunken() || this.cpu.board.allSunken();
  };

  makeMove = (attacker, target, opponent) => {
    if (
      !opponent.board.ownAttackedSpaces.includes(target) && // if space has not been attacked yet
      target >= 0 &&
      target < 100
    ) {
      attacker.attack(opponent, target);
      attacker.attempts.push({
        space: target,
        result: attacker.lastAttackResult,
      }); //

      return true; // reports that attack was successful
    } else {
      console.log(`Invalid choice!`);
      return false;
    }
  };

  #getRandSpace = () => Math.floor(Math.random() * 100);

  getCpuMove = () => {
    let choice;
    if (this.cpu.currentTargetShip == "none") {
      if (this.cpu.lastAttackResult == "HIT") {
        let cpuAttempts = this.cpu.attempts.map(elm => elm.space);
        this.cpu.currentTargetShip = new targetShip(
          cpuAttempts, // simply using 'attempts' property won't work because it's an array of objects
          cpuAttempts[cpuAttempts.length - 1] // simply using 'attempts' property won't work because it's an array of objects
        );
        choice = this.cpu.currentTargetShip.getTarget()
      } else {
        choice = this.#getRandSpace();
        while (this.p1.board.ownAttackedSpaces.includes(choice)) {
          choice = this.#getRandSpace();
        }
      }
    } else {
      choice = this.cpu.currentTargetShip.getTarget()
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
