const coinflip = () => Math.floor(Math.random() * 2);

class targetShip {
  constructor(firstHit, secondHit) {
    this.spaces = [firstHit, secondHit];
    this.orientation =
      Math.abs(this.spaces[1] - this.spaces[0]) == 1
        ? "horizontal"
        : "vertical";
  }
  getTarget() {
    let lowestValHit = Math.min(...this.spaces); // 4
    let highestValHit = Math.max(...this.spaces); // 14
    console.log(lowestValHit, highestValHit);
    if (this.orientation == "vertical") {
      if (coinflip()) {
        if (this.#isValidTarget(highestValHit + 10)) return highestValHit + 10;
      } else {
        if (this.#isValidTarget(lowestValHit - 10)) return lowestValHit - 10;
      }
    } else {
      if (coinflip()) {
        if (this.#isValidTarget(highestValHit + 1)) return highestValHit + 1;
      } else {
        if (this.#isValidTarget(lowestValHit - 1)) return lowestValHit - 1;
      }
    }
  }
  #isValidTarget(target) { // does not yet check if target has already been attacked
    if (this.orientation == "horizontal") {
      if (Math.floor(this.spaces[0] * 0.1) == Math.floor(target * 0.1)) {
        return true;
      } else {
        return false;
      }
    } else if (this.orientation == "vertical") {
      if (target > 0 && target < 100) {
        return true;
      } else {
        return false;
      }
    } else {
      return "invalid";
    }
  }
}

let newShipHere = new targetShip(14, 15);
newShipHere.spaces.push(16);
console.log(newShipHere.orientation);
console.log(newShipHere.spaces);
console.log(newShipHere.getTarget());
