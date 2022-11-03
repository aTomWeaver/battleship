const coinflip = () => Math.floor(Math.random() * 2);

class targetShip {
  constructor(attackedSpaces, ...hits) {
    this.spaces = [...hits];
    this.unavailableSpaces = [...attackedSpaces]
  }
  get orientation() {
    if (this.spaces.length < 2) {
      return "none";
    } else if (Math.abs(this.spaces[1] - this.spaces[0]) == 1) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }
  getTarget() {
    let target;
    if (this.orientation == 'none') {
      target = this.#attackPerimeter(this.spaces[0]);
    } else {
      let lowestValHit = Math.min(...this.spaces);
      let highestValHit = Math.max(...this.spaces);
      console.log(lowestValHit, highestValHit);
      if (this.orientation == "vertical") {
        if (this.#isValidTarget(highestValHit + 10)) {
          target = highestValHit + 10;
        } else if (this.#isValidTarget(lowestValHit - 10)) {
          target = lowestValHit - 10;
        } else {
          console.log('no valid move');
        }
      } else {
        if (this.#isValidTarget(highestValHit + 1)) {
          target = highestValHit + 1;
        } else if (this.#isValidTarget(lowestValHit - 1)) {
          target = lowestValHit - 1;
        }
      }
    }
    this.unavailableSpaces.push(target);
    return target;
  }
  #isValidTarget(target) { 
    if (!this.unavailableSpaces.includes(target)) {
      let center = this.spaces[0];
      if (this.orientation == "horizontal" || (target == center - 1 || target == center + 1)) {
        if (Math.floor(this.spaces[0] * 0.1) == Math.floor(target * 0.1)) {
          return true;
        } else {
          return false;
        }
      } else if (this.orientation == "vertical" || (target == center - 10 || target == center + 10)) {
        if (target > 0 && target < 100) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  #attackPerimeter(center) {
    const left = center - 1;
    const up = center - 10;
    const right = center + 1;
    const down = center + 10;
    const directions = [left, up, right, down];

    return directions.find(dir => this.#isValidTarget(dir))
  }
}

export {targetShip}